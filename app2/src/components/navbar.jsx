import { Link } from "react-router-dom"
import Login from "./login"

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Airbnb</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/properties' className="nav-link active" aria-current="page" href="#">Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Properties</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Bookings</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div><Link to={'/'}>Logout</Link></div>
            </nav>
        </div>
    )
}
export default Navbar