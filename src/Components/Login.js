import React, { useContext } from 'react'
import { FiTwitter } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { Link, withRouter  } from 'react-router-dom'


import styles from './login.module.css'
import { firebaseAuth } from '../provider/AuthProvider'

const Login = (props) => {
    const { inputs, setInputs, errors, handleLogin } = useContext(firebaseAuth)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prev => ({ ...prev, [name]: value }))
    }

   const handleSubmit = async (e) => {
       e.preventDefault()
       console.log("handlesubmit")
       await handleLogin()
       //push home
       props.history.push("/")
   }

    return (
        <div className={styles.container}>
            <FiTwitter style={{ width: "200px", height: "100px", "strokeWidth": "1", color: "#00acee", marginBottom: "40px" }} />
            <form onSubmit={handleSubmit}>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaUser /></span>
                    <input name="email" type="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div className={styles.inputgroup}>
                    <span className={styles.inputgrouptext}><FaLock /></span>
                    <input name="password" type="text" value={inputs.password} onChange={handleChange} placeholder="Password" />
                </div>
                <button className={`btn ${styles.mybtn}`}>SIGN IN</button>
                {errors.length > 0 ? errors.map(err => <p style={{color: "red"}}>{err}</p>) : null}
            </form>
            <p style={{ color: "#adb5bd", fontSize: "15px" }}>Not a member? <span style={{ color: "#8e97a0" }}><Link to="/signup">Sign up now <FaArrowRight style={{ width: "20px", height: "20px", color: "#8c8686" }} /></Link></span></p>
        </div>
    )
}

export default withRouter(Login)