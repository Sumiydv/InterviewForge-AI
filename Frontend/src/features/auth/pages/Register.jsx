import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        const result = await handleRegister({ username, email, password })
        if (!result?.success) {
            setError(result?.error || "Registration failed")
            return
        }
        navigate("/")
    }

    if (loading) {
        return (<main className='loading-screen'><h1>Creating your account...</h1></main>)
    }

    return (
        <main className='auth-page'>
            <div className="form-container">
                <p className='auth-kicker'>Interview AI</p>
                <h1 className='auth-title'>Create Account</h1>
                <p className='auth-subtitle'>Start with a profile and get a custom prep plan in minutes.</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>

                    <button className='button primary-button' >Register</button>

                </form>
                {error && <p className='auth-error'>{error}</p>}

                <p className='auth-switch'>Already have an account? <Link to={"/login"} >Login</Link> </p>
            </div>
        </main>
    )
}

export default Register
