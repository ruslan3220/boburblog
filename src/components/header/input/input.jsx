import search from "../../../assets/image/search.svg"
// import { useState, useEffect } from "react"
export const Input = () => {


        // const[query, setQuery] = useState("")

        // const[posts, setPost] = useState(null)

        // useEffect(() => {
        //     fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response =>{
        //         console.log(response.ok)
        //         if(!response.ok){
        //             throw Error("cannot")
        //         }
        //         return response.json();
        //     }).then(data => {
        //         console.log(data);
        //         setPost(data)
        //     }).catch(e =>{
        //         console.log(e.meassage)
        //     })
        // }, [])
    

    return(
        <div>
          <div className="input-group">

                <input  type="text" className="form-control bg-light border-0" placeholder="Search" aria-label="Username"/>
              {/* {posts && 
                posts.filter(post =>{
                    if(query == ""){
                        return post;
                    } else if(post.title.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index)=>(
                    <div className="box" key={index}>
                        <p>
                         {post.title}
                        </p>
                    </div>
                ))
              } */}
              
                <span className="input-group-text border-0" style={{background: '#FFBA9D'}}><img style={{color: '#fff'}} src={search} alt="search icon"/></span>
        </div>
        </div>
    )
}