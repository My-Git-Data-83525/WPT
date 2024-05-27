import { useState } from "react"
import { useNavigate,Link } from "react-router-dom";
import register from "../Services/admin";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const navigate=useNavigate( )

    const onRegister = async () => {
        if (firstName.length == 0)
            alert('enter valid name')
        else if (email == 0)
            alert('email is required!')
        else if (lastName == 0) {
            alert('enter valid lastName')
        } else  if (password == 0) {
            alert('enter valid password')
        } else {
            // console.log(`password=${password}`)
            // console.log(`ConfirmPassword=${ConfirmPassword}`)
            // console.log(`email=${email}`)
            // console.log(`firstName=${firstName}`)
            // console.log(`lastName=${lastName}`)
            const result= await register(firstName,lastName,email,password)
            if(result['status']=='success'){
                <div>Admin registered successfully</div>
                navigate('/login')            
            }
        }
    }
    return (
        <div className="page-header ">
            <div class="container text-center">
                <div className="mb3 ">
                    <h2>Register</h2>
                </div>
                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col">
                        <div className="from mt3">

                            <div className="mb-3">
                                <label htmlFor="" >First  Name</label>
                                <input

                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" >Last  Name</label>
                                <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" >Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" >password</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" >confirm password</label>
                                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="form-control" />
                            </div>
                            <div>Already have account? <Link to="/login">Login</Link> </div>
                            <button className="btn btn-success me-5" onClick={onRegister}>Save</button>
                                <button className="btn btn-danger">Cancel</button>
                        </div>

                    </div>
                    
                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register