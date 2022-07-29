import rasm from "../../../assets/image/logo-img.png"
import { Link } from "react-router-dom"
export const Logo = () =>{
    return (
        <div >
            <Link to="/one"><img src={rasm} alt="Logo" /></Link>
        </div>
    )
}  