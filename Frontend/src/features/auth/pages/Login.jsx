import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        const result = await handleLogin({ email, password })
        if (!result?.success) {
            setError(result?.error || "Login failed")
            return
        }
        navigate('/')
    }

    if (loading) {
        return (<main className='loading-screen'><h1>Signing you in...</h1></main>)
    }


    return (
        <main className='auth-page'>
            <div className="form-container">
                <p className='auth-kicker'>Interview AI</p>
                <h1 className='auth-title'>Welcome Back</h1>
                <p className='auth-subtitle'>Sign in to continue building your interview strategy.</p>
                <form onSubmit={handleSubmit}>
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
                    <button className='button primary-button' >Login</button>
                </form>
                {error && <p className='auth-error'>{error}</p>}
                <p className='auth-switch'>Don't have an account? <Link to={"/register"} >Register</Link> </p>
            </div>
        </main>
    )
}

export default Login
