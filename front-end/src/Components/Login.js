import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import iphoneLogo from "../Images/iphoneLogo.png";
import { UserContext } from "../Providers/UserProvider";
import {
  signInWithGoogle,
  signInWithGithub,
  signInWithEmailAndPassword,
} from "../Services/Firebase";
import { apiURL } from "../util/apiURL";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
import "../Styles/Login.css";

const API = apiURL();

export const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = async (user) => {
    const {
      uid,
      displayName,
      linkedin,
      twitter,
      email,
      photoURL,
      phoneNumber,
    } = user;
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
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <section className="form-container">
      <div className="form-content-left">
        <img className="iphoneImg form-img" src={iphoneLogo} />
      </div>
      <form
        className="form"
        onSubmit={handleSubmit}
        className="form-content-right"
      >
        <h1 className="login-heading">Get Started</h1>
        <div className="login-btns">
          <button onClick={handleSignInGoogle} className="login google-btn">
            <img
              className="logo google-logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google logo"
            />
            <p>Continue with Google</p>
          </button>

          <button onClick={handleSignInGithub} className="login github-btn">
            <img
              className="logo github-logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github logo"
            />
            <p>Continue with Github</p>
          </button>
        </div>

        <p>or login with email</p>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button className="form-input-btn" type="submit">
          Login
        </button>

        <Link className="form-input-link" to="/signup">
          <button className="form-input-btn" type="submit">
            Sign Up
          </button>
        </Link>
      </form>
    </section>
  );
};
