import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

import styles from './login.module.css'

const Signup = () => {
    return (
        <div className={styles.container}>
        <FiTwitter style={{width: "200px", height: "100px", "strokeWidth": "1", color: "#00acee", marginBottom: "40px"}}/>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaUser /></span>
        <input type="text" placeholder="firstname"/>
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaUser /></span>
        <input type="text" placeholder="lastname"/>
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaUser /></span>
        <input type="text" placeholder="username"/>
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><IoIosMail /></span>
        <input type="text" placeholder="email"/>
        </div>
        <div className={styles.inputgroup}>
        <span className={styles.inputgrouptext}><FaLock /></span>
        <input type="text" placeholder="password"/>
        </div>
        <button className={`btn ${styles.mybtn}`}>SIGN UP</button>
        <p style={{color: "#adb5bd", fontSize:"15px"}}>Already have an account? <span style={{color: "#8e97a0"}}><Link to="/">Sign in <FaArrowRight style={{width: "20px", height: "20px", color: "#8c8686"}}/></Link></span></p>
        </div>
    )
}

export default Signup