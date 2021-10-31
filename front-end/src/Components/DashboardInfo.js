import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signOut } from "../Services/Firebase";
// import ConnectionsList from "./ConnectionsList.js"
import { apiURL } from "../util/apiURL";
import axios from "axios";
import Card from "../Components/Card";
import "../index.css";
import { DashboardEdit } from "./DashboardEdit";
import { Link } from "react-router-dom";
const API = apiURL();

export const DashboardInfo = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    uid: "",
    display_name: "",
    linkedin: "",
    twitter: "",
    email: "",
    photo_url: "",
    phone_number: "",
  });


  const handleLogout = async () => {
    signOut();
    alert("you've been logged out");
  };

  useEffect(() => {
    if (!user) {
      history.push("");
    } else {
      const getSingleUser = async () => {
        try {
          let res = await axios.get(`${API}/users/${user.uid}`);
          setUserInfo(res.data.payload);
        } catch (error) {
          console.log(error);
        }
      };
      getSingleUser();
    }
  }, [user, history]);

  if (!user) {
    return <div>No User</div>;
  }
  
  return (
    <section className="dashboard">
      {/* <h1 className="cardName">Welcome to TieIn</h1> */}
      <div className="cardDiv">
        <div className="card">
          <h1 className="cardName">
            <label></label> {userInfo.display_name}
          </h1>
          <hr />
          <p className="cardPhoneNumber">
            <label><i className="fas fa-mobile-alt"></i></label>
            {userInfo.phone_number}
          </p>
          <hr />
          <p className="cardEmail">
            <label><i className="far fa-envelope"></i></label>
            {userInfo.email}
          </p>
          <hr />
          <p className="cardWebsite">
            <label><i className="fab fa-linkedin"></i></label>
            <a href={userInfo.linkedin ? userInfo.linkedin : "no url found"}>{userInfo.linkedin ? userInfo.linkedin : "no url found"}</a>
          </p>
          <hr />
        </div>
      </div>

      <div className="buttons">
        <Link to="/dashboard/edit">
          <button>
            <i className="fas fa-edit"></i>
          </button>
        </Link>
        <Link to="/qrcode">
        <button>
          <i className="fas fa-redo-alt"></i>
        </button>
        </Link>
        <button onClick={handleLogout}> LOG OUT</button>
        <Link to="/connections">
          <button>
            <i className="fas fa-users"></i>
          </button>
        </Link>
      </div>
    </section>

  );
};
