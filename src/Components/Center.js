import React, { useState, useEffect, useRef } from 'react';
import Divider from '@material-ui/core/Divider'
import { MdStarBorder } from 'react-icons/md'
import { MdInsertEmoticon } from 'react-icons/md'
import { MdGif } from 'react-icons/md'
import { FaImage } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import SocialService from '../Services/SocialService'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import './center.css'

const Center = () => {

    const [posts, setPosts] = useState()
    const [showPost, setShowPost] = useState('')
    const [id, setId] = useState('')
    const [open, setOpen] = useState(false)
    const [like, setLike] = useState(false)
    const [countLike, setCountLike] = useState(0)
    let unsubscribe = undefined


    const handleChange = (event) => {
        setPosts(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            posts,
            "createdAt": new Date(),
            like: false,
            countLike: 0,
        }

        SocialService.create(data)
            .then(() => {
                console.log("post added")
                setPosts("")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //retrieve posts 
    useEffect(() => {
        unsubscribe = SocialService.getAll().orderBy("createdAt", "desc").onSnapshot(getData)
        return () => {
            unsubscribe()
        }
    }, [])

    const getData = (items) => {

        const posts = []

        items.forEach((item) => {
            const id = item.id
            const data = item.data()

            posts.push({
                id,
                posts: data.posts,
                createdAt: data.createdAt,
                like: data.like,
                countLike: data.countLike,
            })
        })
        setShowPost(posts)
        console.log(posts)
    }

    //update post 
    const handleUpdate = (id) => {
        console.log(id)

    }

    //open dialog

    const handleDialogOpen = (id) => {
        console.log(id)
        setId(id)
        setOpen(true)
    }

    const handleDialogClose = () => {
        setOpen(false)
    }

    // delete post
    const handleDelete = () => {
        console.log(id)
        SocialService.delete(id)
            .then(() =>
                console.log(showPost)
            )
            .catch((error) => {
                console.log(error)
            })
        setOpen(false)
    }

    //update like and countLike
    const updateLike = (id) => {
        setLike(!like)
        setCountLike(prevCount => like === true ? prevCount + 1 : prevCount)
        SocialService.update(id, {
            like,
            countLike,
        })
            .then(() => {
                console.log("successfully updated")
                console.log(like)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='center'>
            <div className='home' style={{ "position": "sticky", "top": "0", "zIndex": "1" }}>
                <h5 className='px-3 pt-3'><strong>Home</strong></h5>
                <MdStarBorder className='mt-3' style={{ 'color': '#00acee', 'marginRight': '15px', 'fontSize': '20px' }} />
            </div>
            <div className='pl-3 pt-3' style={{ 'display': 'flex' }}>
                <Avatar>
                    F
                </Avatar>
                <div style={{ 'marginBottom': '0px' }}>
                    <textarea class="form-control" placeholder="What's happening" value={posts} name='post' onChange={handleChange} />
                    <p style={{ 'marginBottom': '0px' }}>
                        <FaImage className='icon2 pl-2' />
                        <MdGif className='icon2' />
                        <MdInsertEmoticon className='icon2' />

                        <button type="button" class="btn small-btn float-right" onClick={handleSubmit}>Tweet</button></p>
                </div>
            </div>
            <hr style={{ 'padding': '5px', 'backgroundColor': '#EDEDF2' }} />


            {showPost.length < 1 ?
                <p>You haven't posted anything recently</p>
                :
                showPost.map((post, index) => {

                    return (
                        <>
                            <List aria-label="user info">
                                <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start' }}>
                                    <Avatar className='mr-2'>
                                        F
                                            </Avatar>
                                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                                        <p style={{ 'marginBottom': '0px' }}>
                                            <strong>Victoria Udechukwu </strong><span style={{ 'color': '#89898C' }}>@vikyij .</span>
                                            <FaRegEdit style={{ marginRight: "5px" }} onClick={() => handleUpdate(post.id)} />
                                        </p>
                                        <p key={index} style={{ 'color': '#646466', 'fontSize': '16px' }}>{post.posts}</p>

                                        <p style={{ 'display': 'flex', 'justifyContent': 'space-between', 'color': '#89898C' }}>
                                            <p><FaRegComment /> <span style={{ 'fontSize': '12px' }}>110</span></p>
                                            <p><FaRetweet /> <span style={{ 'fontSize': '12px' }}>300</span></p>
                                            <p><FaRegHeart style={{ color: post.like == true ? "red" : null }} onClick={() => updateLike(post.id)} />
                                                <span style={{ 'fontSize': '12px' }}>{post.like === true ? 1 : 0}</span></p>
                                            <FaRegTrashAlt style={{ color: "red" }} onClick={() => handleDialogOpen(post.id)} />
                                        </p>
                                    </div>
                                </ListItem>
                            </List>
                            <Divider />
                            <Dialog
                                open={open}
                                onClose={handleDialogClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">{"Do you want to delete this post?"}</DialogTitle>

                                <DialogActions>
                                    <Button onClick={handleDialogClose} color="primary">
                                        No
                                 </Button>
                                    <Button onClick={handleDelete} color="primary">
                                        Yes
                                 </Button>
                                </DialogActions>
                            </Dialog>

                        </>
                    )
                })
            }

        </div>
    )
}

export default Center