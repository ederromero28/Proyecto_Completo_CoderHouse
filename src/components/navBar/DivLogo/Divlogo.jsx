import { Link } from "react-router-dom"
import logo from "../../../assets/img/newLogo.png"

export default function Divlogo() {
    return (
        <Link to={"/"} className="ctnLogo">
            <img src={logo} alt="logoEcas" className="logo" />
        </Link>
    )
}