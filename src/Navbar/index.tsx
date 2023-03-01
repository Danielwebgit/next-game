
import { BrowserRouter, NavLink } from "react-router-dom";
import { Header } from "./style";

export default function Navbar() {

    return (
        <BrowserRouter>
            <Header>
                <div className="logo">
                    <img src="https://i.pinimg.com/736x/41/1d/2d/411d2d118a8969134e0ae47bccbeef0a.jpg" alt="logo" />
                </div>
                <ul className="menu">
                    <li><NavLink to="/cadastrar" className="nav-link"> LISTAR TIMES </NavLink></li>
                    <li><NavLink to="/pagina-inicial" className="nav-link"> PROXIMO QUE VAI ENTRAR </NavLink></li>
                </ul>
            </Header>
        </BrowserRouter>

    );
}