import logo from "../../../assets/image/footerlogo.png"
import photo from "../../../assets/image/Subtract.png"
import { Link } from "react-router-dom"
export const FoorterLogo = () =>{
    return (
        <div>
           <Link style={{zIndex: '3'}} to="/one"><img src={logo} alt="Logo" /></Link>
            <img  className="position-absolute" style={{zIndex: '1', left: '-115px', top: '-3px', width: '800px'}} src={photo} alt="LogoFooter" />
        </div>
    )
}  