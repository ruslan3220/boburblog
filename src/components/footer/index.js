import { FoorterLogo } from "./footerLogo/footerlogo"
import { FooterNav } from "./footerNav/footerNav"

export const Footer = () =>{
    return(
        <div className="bg-black position-relative w-100">
            <div  className="container d-flex justify-content-between " style={{padding: '40px 0 45px 0', }}>
            <FoorterLogo/>
            <FooterNav/>
            </div>
        </div>
    )
}