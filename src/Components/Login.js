import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'


import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
        <FiTwitter style={{width: "200px", height: "100px", "strokeWidth": "1", color: "#00acee", marginBottom: "40px"}}/>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaUser /></span>
        <input type="text" placeholder="username"/>
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaLock /></span>
        <input type="text" placeholder="password"/>
        </div>
        <button className={`btn ${styles.mybtn}`}>SIGN IN</button>
        <p style={{color: "#adb5bd", fontSize:"15px"}}>Not a member? <span style={{color: "#8e97a0"}}><Link to="/signup">Sign up now <FaArrowRight style={{width: "20px", height: "20px", color: "#8c8686"}}/></Link></span></p>
        </div>
    )
}

export default Login