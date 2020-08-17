import React from 'react';
import Divider from '@material-ui/core/Divider'
import { MdStarBorder } from 'react-icons/md'
import { MdInsertEmoticon } from 'react-icons/md'
import { MdGif } from 'react-icons/md'
import { FaImage } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';

import './center.css'

const Center = () => {
    return (
        <div className='center'>
            <div className='home'>
                <h5 className='px-3 pt-3'><strong>Home</strong></h5>
                <MdStarBorder className='mt-3' style={{ 'color': '#00acee', 'marginRight': '15px', 'fontSize': '20px' }} />
            </div>
            <Divider />
            <div className='pl-3 pt-3' style={{ 'display': 'flex' }}>
                <Avatar>
                    F
                </Avatar>
                <div style={{'marginBottom': '0px'}}>
                    <p><input type='text' class="form-control" placeholder="What's happening" /></p>
                    <p style={{'marginBottom': '0px'}}>
                        <FaImage className='icon2 pl-2' />
                        <MdGif className='icon2' />
                        <MdInsertEmoticon className='icon2' />
                   
                        <button type="button" class="btn small-btn float-right">Tweet</button></p>
                </div>
            </div>
            <hr style={{'padding': '5px', 'backgroundColor': '#EDEDF2'}} />
          
            <List aria-label="user info">
                <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start'}}>                   
                        <Avatar className='mr-2'>
                            F
                            </Avatar>
                                       
                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>                                                        
                    <p style={{ 'marginBottom': '0px'}}>
                        <strong>Victoria Udechukwu </strong><span style={{'color': '#89898C'}}>@vikyij . 2m</span></p>
                            <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                      
                      <p style={{'display': 'flex','justifyContent': 'space-between', 'color': '#89898C'}}>
                          <p><FaRegComment /> <span style={{'fontSize': '12px'}}>110</span></p>
                          <p><FaRetweet /> <span style={{'fontSize': '12px'}}>300</span></p>
                          <p><FaRegHeart />  <span style={{'fontSize': '12px'}}>1000</span></p>
                          <FiShare />
                          </p>
                    </div>                     
                   
                </ListItem>
            </List>    
            <Divider />  

            <List aria-label="user info">
                <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start'}}>                   
                        <Avatar className='mr-2'>
                            F
                            </Avatar>
                                       
                    <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>                                                        
                    <p style={{ 'marginBottom': '0px'}}>
                        <strong>Victoria Udechukwu </strong><span style={{'color': '#89898C'}}>@vikyij . 2m</span></p>
                            <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                      
                      <p style={{'display': 'flex','justifyContent': 'space-between', 'color': '#89898C'}}>
                          <p><FaRegComment /> <span style={{'fontSize': '12px'}}>110</span></p>
                          <p><FaRetweet /> <span style={{'fontSize': '12px'}}>300</span></p>
                          <p><FaRegHeart />  <span style={{'fontSize': '12px'}}>1000</span></p>
                          <FiShare />
                          </p>
                    </div>                     
                   
                </ListItem>
            </List>      
       
            <Divider />  

<List aria-label="user info">
    <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start'}}>                   
            <Avatar className='mr-2'>
                F
                </Avatar>
                           
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>                                                        
        <p style={{ 'marginBottom': '0px'}}>
            <strong>Victoria Udechukwu </strong><span style={{'color': '#89898C'}}>@vikyij . 2m</span></p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          
          <p style={{'display': 'flex','justifyContent': 'space-between', 'color': '#89898C'}}>
              <p><FaRegComment /> <span style={{'fontSize': '12px'}}>110</span></p>
              <p><FaRetweet /> <span style={{'fontSize': '12px'}}>300</span></p>
              <p><FaRegHeart />  <span style={{'fontSize': '12px'}}>1000</span></p>
              <FiShare />
              </p>
        </div>                     
       
    </ListItem>
</List>      

<Divider />  

<List aria-label="user info">
    <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start'}}>                   
            <Avatar className='mr-2'>
                F
                </Avatar>
                           
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>                                                        
        <p style={{ 'marginBottom': '0px'}}>
            <strong>Victoria Udechukwu </strong><span style={{'color': '#89898C'}}>@vikyij . 2m</span></p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          
          <p style={{'display': 'flex','justifyContent': 'space-between', 'color': '#89898C'}}>
              <p><FaRegComment /> <span style={{'fontSize': '12px'}}>110</span></p>
              <p><FaRetweet /> <span style={{'fontSize': '12px'}}>300</span></p>
              <p><FaRegHeart />  <span style={{'fontSize': '12px'}}>1000</span></p>
              <FiShare />
              </p>
        </div>                     
       
    </ListItem>
</List>      

<Divider />  

<List aria-label="user info">
    <ListItem button style={{ 'display': 'flex', 'alignItems': 'flex-start'}}>                   
            <Avatar className='mr-2'>
                F
                </Avatar>
                           
        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>                                                        
        <p style={{ 'marginBottom': '0px'}}>
            <strong>Victoria Udechukwu </strong><span style={{'color': '#89898C'}}>@vikyij . 2m</span></p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <p style={{'color': '#646466', 'fontSize': '16px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          
          <p style={{'display': 'flex','justifyContent': 'space-between', 'color': '#89898C'}}>
              <p><FaRegComment /> <span style={{'fontSize': '12px'}}>110</span></p>
              <p><FaRetweet /> <span style={{'fontSize': '12px'}}>300</span></p>
              <p><FaRegHeart />  <span style={{'fontSize': '12px'}}>1000</span></p>
              <FiShare />
              </p>
        </div>                     
       
    </ListItem>
</List>      
       
        </div>
    )
}

export default Center