import {Routes, Route} from "react-router-dom"
import { Login } from "./pages/login/login"

export const PublicApp = ()=>{
    return( 
        <div>
          <Routes>
            <Route path='/' element={<Login/>}/>
          </Routes>
        </div>
    )
}