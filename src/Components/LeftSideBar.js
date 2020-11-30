import React, { useState, useEffect, useRef} from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiHash } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { MdKeyboardArrowDown } from 'react-icons/md'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import './leftsidebar.css'



const LeftSideBar = () => {
    

    return (
        <div className='left-side' style={{"overflow": "auto", "position": "fixed", "height": "670px"}}>
            <div className=''>
                <button type='button' className='btn item' id='icon-1' style={{ 'color': '#00acee' }}>
                    <FaTwitter className='icon' />
                </button>
            </div>

            <div className='' >
                <button type='button' className='btn item' style={{ 'color': '#00acee' }}>
                    <FaHome className='icon' />
                    <strong>Home</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FiHash className='icon' />
                    <strong>Explore</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <MdNotificationsNone className='icon' />
                    <strong>Notifications</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FaRegEnvelope className='icon' />
                    <strong>Messages</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FaRegBookmark className='icon' />
                    <strong>Bookmarks</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FaRegListAlt className='icon' />
                    <strong>Lists</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FaRegUser className='icon' />
                    <strong>Profile</strong>
                </button>
            </div>

            <div className=''>
                <button type='button' className='btn item'>
                    <FiMoreHorizontal className='icon' style={{ 'border': '2px solid #000', 'borderRadius': '50%' }} />
                    <strong>More</strong>
                </button>
            </div>

            <div className='item'>
                <button type="button" class="btn big-btn">Tweet</button>
            </div>

            <List aria-label="user info">
                <ListItem button >
                    <ListItemAvatar>
                        <Avatar>
                            F
                            </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary={<strong>Victoria Udechukwu</strong>} secondary="@vikyij" />

                    <MdKeyboardArrowDown />
                </ListItem>
            </List>
        </div>
    )
}

export default LeftSideBar