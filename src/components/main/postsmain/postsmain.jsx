import { Posts } from "../posts/posts"
export const Postmain = ()=>{


    return(


        <div className="col-8">
        <h3 style={{color: '#474747', fontWeight: '400', marginBottom: '58px', fontSize: '24px'}}>Recent Posts</h3>
         <Posts/>
        </div>
    )
}