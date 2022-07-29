import { useRef } from "react"
import { Input } from "../../components/input/input"
import { useAuth } from "../../hooks/useAuth"
import logologin from "../../assets/image/logo-img.png"
export const Login = () =>{

    const [, setToken] = useAuth()

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
   

    const handleLogin = async (evt)=>{
        evt.preventDefault();
 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("_username", usernameRef.current.value);
urlencoded.append("_password", passwordRef.current.value);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

const res = await fetch("https://jsonplaceholder.typicode.com/posts")
if(usernameRef.current.value === "user_name" && passwordRef.current.value === "user_password"){
    const data = await res.json()
    return setToken(data)
    
} else if(usernameRef.current.value === "" && passwordRef.current.value === "") {
    alert("Kodni kiriting")
    usernameRef.current.value = null;
    passwordRef.current.value = null;
    
    usernameRef.current.style.border = '1px solid red';
    passwordRef.current.style.border = '1px solid red';
} else{
    alert("Xato kod")
    usernameRef.current.value = null;
    passwordRef.current.value = null;
    
    usernameRef.current.style.border = '1px solid red';
    passwordRef.current.style.background = 'red';
}
};


    return (
        <div className="container">
            <img style={{margin: '30px 0 70px 0'}} src={logologin} alt="logologin" />
            <h1 className="text-center">Login</h1>
            <form className="text-center mt-4" onSubmit={handleLogin}>
                <Input className="w-25 my-3 border-0 bg-light p-2" ref={usernameRef} name="username"  placeholder = "Login" type="text">Login</Input>
                <Input className="w-25 my-3 border-0 bg-light p-2" ref={passwordRef} name="password"  placeholder = "Password" type="password">Password</Input>
                <button className="btn btn-dark w-25 my-3">Submit</button>
            </form>
        </div>
    )
}