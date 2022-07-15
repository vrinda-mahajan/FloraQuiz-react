import { NavLink } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    return(
        <nav className="flex-r">
            <NavLink to="/" className="m1 p1 m-right-auto app-name text-decor-none">
                floraQuiz<i className="fa-solid fa-question"></i>
            </NavLink>
            <div className="m1 p1 align-center">
                <NavLink to="/" className="btn btn-link text-lg text-decor-none"><i className="fa-solid fa-house-chimney"></i>Home</NavLink>
                <NavLink to="login" className="btn btn-link text-lg text-decor-none"><i className="fa-solid fa-right-to-bracket"></i>Login</NavLink>
            </div>
        </nav>
    )
}