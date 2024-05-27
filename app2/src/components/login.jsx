import { useState } from "react"
import { Link } from "react-router-dom"



function Login() {
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const onLogin = () => {
    if (email.length == 0) {
      alert('enter valid email')
    } else if (password.length == 0) {
      alert('enter password')
    } else {
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)
    }
  }
    return (
        <div>
            <div>
                <div className="container text-center">

                   <div className="row">
                        <div className="col-4">
                        </div>

                        <div className="col-4 ">
                            <div className="form mt-3">
                                <div className="mb-3"><h2>Login</h2></div>
                                <div className="mb-3 ">
                                    <label htmlFor="">Email</label>
                                    <input 
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" className="form-control" />   
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="">Password</label>
                                    <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" className="form-control" />
                                </div>
                                <div>
                                    <div className="mb-3">Don't have account? <Link to="/register">Register here</Link></div>
                                    <button className="btn btn-success" onClick={onLogin}>Login</button>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-4">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login