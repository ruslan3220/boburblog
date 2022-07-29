import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import clock from "../../../assets/image/clock.svg"
import { DateTime } from "../../../datetime/datetime"
import { Header } from "../../../components/header/header"
import { Footer } from "../../../components/footer/index"
import { Mydoing } from "../../../components/main/mydoing/mydoing"
import { Pagination } from "../../../components/main/pagination/pagination"

export const PostsFive =()=>{

    const [posts, setPosts] = useState([])
    useEffect(() =>{
            ;(async()=>{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                if(res.ok){
                    const data = await res.json()
                    return setPosts(data)
                }
                console.log({status: res.status, message: res.statusText});
            })()
    }, [])

    return(

        <div>
            <Header/>
            <div className="container">
               <div style={{marginTop: '165px'}} className="row">
               <div className="col-4">
                    <Mydoing/>
                </div>
                <div className="col-8">
                {posts.length >= 0 && <ul className="list-unstyled"> {posts.slice(81, 100).map((post) =>(
                 <li key={post.id}>
                    <div style={{marginBottom: '20px'}} className="d-flex justify-content-between">
                        <DateTime/>
                        <p style={{color: ' #777777', fontWeight: '400',fontSize: '12px', marginBottom: '0'}} >Design theory </p>
                    </div>
                     <Link style= {{textDecoration: 'none'}} to={`/post/${post.id}`}>
                             <p style={{color: '#474747', fontWeight: '400', fontSize: '19px', width: '544px', marginBottom: '22px'}}>{post.title}</p>
                     </Link>
                          <p className="d-flex align-items-center gap-2" style={{fontSize: '12px', fontWeight: '400', color: ' #777777', marginBottom: '16px'}}><img style={{width: '14px'}} src={clock}   alt="clock icon"/> 3 minutes read</p>
                           <hr style={{marginBottom: '46px'}}/>
                </li>
                    ))}
                </ul>}
                </div>
               </div>
            <Pagination/>
            </div>
            <Footer/>
                           
        </div>

    )
}