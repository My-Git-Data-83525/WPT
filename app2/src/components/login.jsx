import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../Services/admin";



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onLogin = async () => {
        if (email.length == 0) {
            alert('enter valid email')
        } else if (password.length == 0) {
            alert('enter password')
        } else {
            console.log(`email = ${email}`)
            console.log(`password = ${password}`)

            const result = await login(email, password)
            if (result['status'] == 'success') {
                const data=result['data']


                sessionStorage['name']=data['name']
                sessionStorage['token']=data['token']
                console.log('success'); 
                alert("Admin Login successfully! ")
                navigate('/properties')
            }

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