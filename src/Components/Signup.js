import React, { useContext } from 'react'
import { FiTwitter } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { Link} from 'react-router-dom'

import styles from './login.module.css'
import { firebaseAuth } from '../provider/AuthProvider'

const Signup = () => {
    const { handleSignup, inputs, setInputs,errors } = useContext(firebaseAuth)
    console.log(handleSignup)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("handlesubmit")
        //wait to signup
        await handleSignup()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(inputs)
        setInputs((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className={styles.container}>
            <FiTwitter style={{ width: "200px", height: "100px", "strokeWidth": "1", color: "#00acee", marginBottom: "40px" }} />
            <form onSubmit={handleSubmit}>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaUser /></span>
                    <input type="text" placeholder="firstname" />
                </div>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaUser /></span>
                    <input type="text" placeholder="lastname" />
                </div>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaUser /></span>
                    <input type="text" placeholder="username" />
                </div>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><IoIosMail /></span>
                    <input onChange={handleChange} name="email" value={inputs.email} type="email" placeholder="email" />
                </div>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaLock /></span>
                    <input onChange={handleChange} name="password" value={inputs.password} type="text" placeholder="password" />
                </div>
                <button className={`btn ${styles.mybtn}`}>SIGN UP</button>
                {errors.length > 0 ? errors.map(err => <p style={{color: "red"}}>{err}</p>) : null}
            </form>
            <p style={{ color: "#adb5bd", fontSize: "15px" }}>Already have an account? <span style={{ color: "#8e97a0" }}><Link to="/login">Sign in <FaArrowRight style={{ width: "20px", height: "20px", color: "#8c8686" }} /></Link></span></p>
        </div>
    )
}

export default Signup