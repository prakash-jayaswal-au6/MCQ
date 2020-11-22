import React, {useState} from 'react';
import './LoginRegister.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    


    return (
        <div className='loginregister'>
            <div className='login'>
                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                        <button className='login__signButton' type='submit' >Sign In</button>
                    </form>
                </div>
            </div>
            <div className='register'>
                <div className="login__container">
                    <h1>Register</h1>
                    <form>
                        <h5>Name</h5>
                            <input type='text' value={name} onChange={e => setName(e.target.value)} />
                            
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    </form>
                    <button  className='login__registerButton'> Create account</button>
                </div>
            </div>
        </div>
    )
}

export default Login
