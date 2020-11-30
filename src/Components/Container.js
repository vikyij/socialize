import React from 'react'
import Center from './Center'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Grid from '@material-ui/core/Grid'


const Container = () => {
    return (
        <div style={{'margin': '5px 20px'}}>
            <Grid container >
                <Grid item xs={12} md={3}>
                    <LeftSideBar />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Center />
                </Grid>
                <Grid item xs={12} md={4}>
                    <RightSideBar />
                </Grid>
            </Grid>
          </div>  
    )
}

export default Container