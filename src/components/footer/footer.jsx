import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <p>Made with <i className="red-color fas fa-heart"></i> by Vrinda Mahajan </p>
            <ul className="m2 list-non-bullet">
                <li className="p1 inline"><a className="footer-icons" target="_blank" href="https://github.com/vrinda-mahajan"><i className="fab fa-github"></i></a></li>
                <li className="p1 inline"><a className="footer-icons" target="_blank" href="https://twitter.com/vrinda_mahajan"><i className="fab fa-twitter"></i></a></li>
                <li className="p1 inline"><a className="footer-icons" target="_blank" href="https://www.linkedin.com/in/vrinda-mahajan-7a2b2a20b/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
            <div>© copyright 2022 Flora UI</div>
        </footer>
    )
}