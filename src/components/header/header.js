import { Input } from "./input/input"
import { Logo } from "./logo/logo"
import { Navbar } from "./navbar/navbar"


export const Header = () =>{
    return(
        <div className="container position-fixed" style={{zIndex:'2', top: '0', left: '105px', background: '#fff', boxShadow: "rgba(0, 0, 0, 0.05) 0px 25px 20px -20px"}}>
           <div className="row " style={{marginTop: '26px'}}>
                <div className="col-4"> <Logo/></div>
                <div className="col-8 d-flex align-items-center justify-content-between">
                <Navbar/>
                <Input/>
                </div>
            </div>
        </div>
    )
}