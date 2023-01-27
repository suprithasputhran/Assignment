import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [username, setUsername] =useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let navigate=useNavigate()

    const handleClick = () =>
    {
        setError(null);
        setLoading(true)

        axios.post( 'https://uyenotest.infotracktelematics.com:5001/fms/v2/auth',{
            LoginName: "TestUser",
            LoginPwd:"testuser@123"
        })
        .then((response)=> {
            setLoading(false)
            if(username === 'TestUser' && password === 'testuser@123')
            {
                console.log(JSON.stringify(response.data))
                navigate('/map')
            }
            if(username === '' || password === '')
            {
                setError('Enter the Username and Password')
            }
           else {
            console.log("Invalid user Name")
            setError("Invalid Username and Password")
           }
        })
        .catch((error)=> {
            setLoading(false)
            if(error.response.status === 401 || error.response.status === 400)
                setError(error.response.data.message)
            else
                setError('Something went wrong: Please try again later')
        })
         
    }
  return (
    <div className='form'>
        <div className='login-container'>
            <h1 className='login-title'>LOGIN</h1>
            <div className='input-group'>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
            </div>
            <div className='input-group'>
                <input type="password" value={password}  onChange={e => setPassword(e.target.value)} placeholder='Password'/>
            </div>
            {error && <div className='error'>{error}</div>}
            <input type="button" onClick={handleClick} value={loading ? 'Loading...' : 'Login'} disabled={loading} className='login-button'/>
        </div>
    </div>
  )
}

export default Login