import { UserContext } from "../Providers/UserProvider";
import axios from 'axios'
import { apiURL } from '../util/apiURL';
import { useHistory } from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
const API = apiURL()
const ExternalPage = () => {
    let history = useHistory()
    const user = useContext(UserContext);
    const [external, setExternal] = useState({
        uid: "",
        display_name: "",
        linkedin: "",
        twitter: "",
        email: "",
        photo_url: "",
        phone_number: "",
    })
    const getSingleUser = async () => {
        try {
          let res = await axios.get(`${API}/users/${user.uid}`);
          setExternal(res.data.payload);
        } catch (error) {
          console.log(error);
        }
    }
        useEffect(()=>{
            getSingleUser()
        })

    const addConnection = async() => {
        try {
            await axios.post(`${API}/users/${user.uid}/connections/${external.uid}`, external.uid)
            alert("Connected!")
            history.push("/connections")
        } catch (error) {
            
        }
    }
    
    return (
      <section>
        <div className="cardDiv">
          <div className="card">
            <h1 className="cardName">
              <label></label> {external.display_name}
            </h1>
            <hr />
            <p className="cardPhoneNumber">
            <label><i class="fas fa-mobile-alt"></i></label>
              {external.phone_number}
            </p>
            <hr />
            <p className="cardEmail">
            <label><i class="far fa-envelope"></i></label>
              {external.email}
            </p>
            <hr />
            <p className="cardWebsite">
            <label><i class="fab fa-linkedin"></i></label>
            <a href={external.linkedin ? external.linkedin : "no url found"}>{external.linkedin ? external.linkedin : "no url found"}</a>
            </p>
            <hr />
          </div>
        </div>

        <button onClick= {addConnection}>Add Connection</button>
      </section>
    );
}

export default ExternalPage;
