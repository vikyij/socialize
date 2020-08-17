import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from  '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider'
import { FiSearch } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import './rightsidebar.css'

const RightSideBar = () => {
    return (
        <div className='right-hand mx-4'>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{ 'border': '0px', 'borderRadius': '50px 0px 0px 50px' }}><FiSearch /></span>
                </div>
                <input type="text" className="form-control"
                    placeholder="Search Twitter"
                    style={{ 'backgroundColor': '#e9ecef', 'border': '0px', 'borderRadius': '0px 50px 50px 0px' }} />
            </div>

            <div className='trends mb-3'>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                    <h5 className='p-3'><strong>Nigeria Trends</strong></h5>
                    <FiSettings className='m-3' style={{ 'color': '#00acee', 'fontSize': '20px' }} />
                </div>
                <Divider />
                <List aria-label="mailbox folders">
                    <ListItem button >
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <span className='trending'>1. Trending</span>
                            <strong>#BBN</strong>
                            <p className='trending'>52.8k Tweet</p>
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <span className='trending'>2. Trending</span>
                            <strong>#BBN</strong>
                            <p className='trending'>52.8k Tweet</p>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <span className='trending'>3. Trending</span>
                            <strong>#BBN</strong>
                            <p className='trending'>52.8k Tweet</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <span className='trending'>4. Trending</span>
                            <strong>#BBN</strong>
                            <p className='trending'>52.8k Tweet</p>
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <a href='#' style={{ 'color': '#00acee' }}>Show more</a>
                        </div>
                    </ListItem>
                </List>
            </div>

            <div className='trends mb-3'>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
                    <h5 className='p-3'><strong>Who to follow</strong></h5>
                </div>
                <Divider />
                <List aria-label="people to follow">
                    <ListItem button >
                        <ListItemAvatar>
                            <Avatar>
                                F
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={<strong>Victoria Udechukwu</strong>} secondary="@vikyij" />
                       
                       <button type="button" class="btn outlined-btn">Follow</button>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                    <ListItemAvatar>
                            <Avatar>
                                F
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={<strong>Victoria Udechukwu</strong>} secondary="@vikyij" />
                       
                       <button type="button" class="btn outlined-btn">Follow</button>
                    </ListItem>
                    <ListItem button>
                    <ListItemAvatar>
                            <Avatar>
                                F
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={<strong>Victoria Udechukwu</strong>} secondary="@vikyij" />
                       
                       <button type="button" class="btn outlined-btn">Follow</button>
                    </ListItem>
                    <Divider light />
                    <Divider />
                    <ListItem button>
                        <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <a href='#' style={{ 'color': '#00acee' }}>Show more</a>
                        </div>
                    </ListItem>
                </List>
            </div>
   
            <Grid container style={{'fontSize': '12px','margin': '15px'}}>
                <Grid item xs={2}> <a href='#' style={{'color': '#646466'}}>Terms</a></Grid>
                <Grid item xs={2}> <a href='#' style={{'color': '#646466'}}>Cookies</a></Grid>
                <Grid item xs={1}> <a href='#' style={{'color': '#646466'}}>Ads</a></Grid>
                <Grid item xs={1}> <a href='#' style={{'color': '#646466'}}>info</a></Grid>
                <Grid item xs={3}> <a href='#' style={{'color': '#646466'}}>Privacy Policy</a></Grid>
            </Grid>
            <p style={{'color':'#646466','fontSize': '12px','margin': '15px'}}>&copy; 2020 @vikyij</p>
        </div>
    )
}

export default RightSideBar