import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import ConnectionsList from "./ConnectionsList.js"
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL()

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
  })






  // const [linkedin, setLinkedin] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLinkedin(e.target.value);

  // axios.post(`https://secret-temple-11924.herokuapp.com`, {color: color, uid:user.uid})
  //   axios.post(`http://localhost:3001/users`, {
  //     linkedin: linkedin,
  //     uid: user.uid,
  //   });
  // };

  // const handleChange = (e) => {
  //   setLinkedin(e.target.value);
  // };


  
  // const deleteSingleUser = async () => {
    //   axios.delete(`http://localhost:3001/users/${user.uid}`);
    // };
    // console.log(deleteSingleUser());
    
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
            let res = await axios.get(
              `${API}/users/${user.uid}`
            );
            setUserInfo(res.data.payload);
          } catch (error) {
            console.log(error);
          }
        };
        getSingleUser();
        // console.log("THIS IS MY NAME:" + userInfo.display_name)
      }
      
    }, [user, history]);
    
    if (!user) {
      return <div>No User</div>;
    }

  return (
    <section className="dashboard">
      <h1>Welcome {userInfo.display_name}</h1>
      <div>
        <img src={userInfo.photo_url} alt={userInfo.display_name} />
      </div>
      <p> Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone_number ? userInfo.phone_number : "no number found"}</p>
      <p>Linkedin: {userInfo.linkedin ? userInfo.linkedin : "no url found"}</p>
      <p>Twitter: {userInfo.twitter ? userInfo.twitter : "no handle found"}</p>
      <button onClick={handleLogout}> LOG OUT</button>

      <ConnectionsList uid = {userInfo.uid}/>
    </section>
  );
};
