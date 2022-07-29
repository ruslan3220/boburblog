import {Routes, Route } from "react-router-dom"
// import { DashBoard } from "./pages/dashboard/dashboard"
import { Design } from "./pages/design/design"
import { All } from "./pages/all/all"
import { PostSingle } from "./pages/postsingle/postsingle"
import { UI } from "./pages/ui/ui"
import { UX } from "./pages/ux/ux"
import { Typografhy } from "./pages/typografhy/typohrafhy"
import { NotFound } from "./pages/notfound/notfound"
import {Posts} from "./components/main/posts/posts"
import {PostsTwo} from "./components/main/posts/posttwo"
import {PostThree} from "./components/main/posts/postthree"
import {PostsFour} from "./components/main/posts/postfour"
import {PostsFive} from "./components/main/posts/postfive"

export const PrivateApp = ()=>{


    return( 
        <div>

            <Routes>
                <Route path='/' element={<Posts/>} />
                <Route path={`/post/:postId`} element={<PostSingle/>}/>
                <Route path="/All" element={<All/>}/>
                <Route path="/Design" element={<Design/>}/>
                <Route path="/UX" element={<UX/>}/>
                <Route path="/UI" element={<UI/>}/>
                <Route path="/Typografy" element={<Typografhy/>}/>
                <Route path="/one" element={<Posts/>}/>
                <Route path="/two" element={<PostsTwo/>}/>
                <Route path="/three" element={<PostThree/>}/>
                <Route path="/four" element={<PostsFour/>}/>
                <Route path="/five" element={<PostsFive/>}/>
                <Route path="*" element={<NotFound/>}/>
             </Routes>
        </div>
    )
}