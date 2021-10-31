import { Login } from '../Components/Login';
import Welcome from "../Components/Welcome"
export const LoginPage = () => {
    return (
        <div className= "landing-page">
           <Welcome />   
           <Login /> 
        </div>
    )
}