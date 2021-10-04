import {useState, useEffect, useContext} from 'react'
import { UserContext } from "../Providers/UserProvider";
import axios from 'axios'
import { apiURL } from '../util/apiURL';
import {useParams, useHistory} from 'react-router-dom'

const API = apiURL()
const ExternalPage = () => {
    // const {id} = useParams()
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
        //   debugger
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
            alert("yall are connected!")
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
              <label>PhoneNumber:</label>
              {external.phone_number}
            </p>
            <hr />
            <p className="cardEmail">
              <label>Email:</label>
              {external.email}
            </p>
            <hr />
            <p className="cardWebsite">
              <label>LinkedIn:</label>
              {external.linkedin ? external.linkedin : "no url found"}
            </p>
            <hr />
          </div>
        </div>


        <button onClick= {addConnection}>Add Connection</button>
      </section>
    );
}

export default ExternalPage;