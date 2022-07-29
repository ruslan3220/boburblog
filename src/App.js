import { useAuth } from "./hooks/useAuth";
import { PrivateApp } from "./private-app";
import { PublicApp } from "./public-app";

function App() {
 const [token] = useAuth()

 if(token) {
  return <PrivateApp/>
 }
 return <PublicApp/>
 
}

export default App;
