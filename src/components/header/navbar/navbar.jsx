import {Link} from "react-router-dom"
import { All } from "../../../pages/all/all"
import { Design } from "../../../pages/design/design"
import { Typografhy } from "../../../pages/typografhy/typohrafhy"
import { UI } from "../../../pages/ui/ui"
import { UX } from "../../../pages/ux/ux"
export const Navbar = () =>{
    return(
           <div className="d-flex gap-4 justify-content-center ">
                     <Link  style={{ textDecoration: 'none', color: '#000' }} to="/All"> All </Link>
                    <Link  style={{ textDecoration: 'none', color: '#9A9A9A' }} to="/Design"> Design Theory</Link>
                      <Link  style={{ textDecoration: 'none', color: '#9A9A9A' }} to="/UX">UX</Link>
                      <Link  style={{ textDecoration: 'none', color: '#9A9A9A' }} to="/UI">UI</Link>
                      <Link  style={{ textDecoration: 'none', color: '#9A9A9A' }} to="/Typografy">Typografhy</Link>
            </div>
    )
}