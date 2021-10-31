import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signInWithGithub, signInWithEmailAndPassword} from "../Services/Firebase";
import { apiURL } from "../util/apiURL";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import "../Styles/Login.css"



const API = apiURL();

export const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const addNewUser = async (user) => {
    const { uid, displayName, linkedin, twitter, email, photoURL, phoneNumber } = user;
    try {
      await axios.post(`${API}/users`, {
        uid: uid,
        display_name: displayName,
        linkedin: linkedin,
        twitter: twitter,
        email: email,
        photo_url: photoURL,
        phone_number: phoneNumber,
      });
    } catch (error) {
      return error;
    }
  };

  const handleSignInGoogle = async () => {
    await signInWithGoogle();
  
  };
  const handleSignInGithub = async () => {
    await signInWithGithub();
  
  };


  useEffect(() => {
    if (user) {
      addNewUser(user);
      history.push("dashboard");
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)
  }
  
  return (
    <div className="loginbackground">
    <section className="Login-msg">
      <h2 className="spanmessage">Get Started</h2>

      <div className="login-container">
        <div onClick={handleSignInGoogle} className="login">
          <img
            alt="logo"
            className="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          />
          <div>Continue with Google</div>
        </div>

        <div onClick={handleSignInGithub} className="login">
          <img
            alt="logo"
            className="logo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <div>Continue with Github</div>
        </div>
      </div>
      
      <span className="spanmessage">or login with email</span>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>

      </form> */}

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
     placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" 
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    placeholder="Password" />
  </Form.Group>
  <Button className="login-btn"variant="light" type="submit">
    Login
  </Button>
  <Link to="/signup">
        <Button className="login-btn" variant="light">Sign Up</Button>{''}
      </Link>
</Form>
    </section>
    </div>
  );
};
