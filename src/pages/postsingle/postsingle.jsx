
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import clock from "../../assets/image/clock.svg"
import pic from "../../assets/image/Img1.png"
import handpic from "../../assets/image/hand.png"
import sharepic from "../../assets/image/share.png"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header/header"
import { DateTime } from "../../datetime/datetime"

export const PostSingle = () =>{

    const {postId} = useParams()

    const [post, setPost] = useState([])
    useEffect (() =>{
        ;(async()=> {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            if(res.ok) {
             return setPost(await res.json())
            }

            console.error({status: res.status, meassage: res.statusText})
        })();
    }, [postId])
    return( 

        <div>
            <Header/>
            <div className="container">
                <div className="row" style={{marginTop: '165px'}}>
                   
                   <div className="col-3">
                        <img style={{display: 'block', marginBottom: '50px', marginLeft: '130px'}} src={handpic} alt="hand pic" />
                        <img style={{marginLeft: '130px'}} src={sharepic} alt="share pic" />
                   </div>

                    <div className="col-9">
                        <p style={{color: ' #777777', fontWeight: '400', fontSize: '12px', marginBottom: '24px'}} >User interface</p>
                     <Link style= {{textDecoration: 'none'}} to={`/post/${post.id}`}>
                             <p style={{color: '#474747', fontWeight: '400', fontSize: '24px', width: '544px', marginBottom: '25px'}}>{post.title} </p>
                            
                     </Link>
                           <div className="d-flex gap-2" style={{marginBottom: '45px'}}>
                           <DateTime/>
                            <span style={{marginTop: '-5px', color: 'lightgrey'}}>|</span>
                             <p className="d-flex align-items-center gap-2" style={{fontSize: '12px', fontWeight: '400', color: ' #777777', marginBottom: '16px'}}><img style={{width:  '14px'}} src={clock}   alt="clock icon"/> 3 minutes read</p>
                           </div>
                        <img style={{width: '550px', marginBottom: '50px'}} src={pic} alt="main photo" />
                         <p style={{width: '550px', fontWeight: '400', color: '#474747', lineHeight: '32px',marginBottom: '50px'}}>{post.body}</p>
                         <h4 style={{marginBottom: '40px'}}>More like this</h4>
                    </div>
                    
                 </div>
            </div>

            <Footer/>
        </div>
       
    )
}