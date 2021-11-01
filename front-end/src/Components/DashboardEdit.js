import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import "../index.css";

const API = apiURL();

const DashboardEdit = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  const [userInfoNew, setUserInfoNew] = useState({
    uid: "",
    display_name: "",
    linkedin: "",
    twitter: "",
    email: "",
    photo_url: "",
    phone_number: "",
  });
  const updateDashboard = async () => {
    try {
      await axios.put(`${API}/users/${user.uid}`, userInfoNew);
      history.push(`/dashboard`);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    const getInfo = async () => {
      try {
        let res = await axios.get(`${API}/users/${user.uid}`);
        console.log(res);
        setUserInfoNew(res.data.payload);
      } catch (error) {
        return error;
      }
    };
    getInfo();
  }, [user]);

  const handleChange = (event) => {
    setUserInfoNew({ ...userInfoNew, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    alert("Your information was saved");
    event.preventDefault();
    updateDashboard();
  };
  return (
    <section className="dashboard">
      <form onSubmit={handleSubmit} className="edit-form">
        <label className="cardName">Name</label>
        <input
          id="display_name"
          className="name"
          placeHolder={userInfoNew.display_name}
          type="text"
          value={userInfoNew.display_name}
          onChange={handleChange}
        />
        <label className="cardPhoneNumber">Phone Number </label>
        <input
          id="phone_number"
          className="phone"
          placeHolder={userInfoNew.phone_number}
          type="text"
          value={userInfoNew.phone_number}
          onChange={handleChange}
        />
        <label className="cardEmail">Email </label>
        <input
          id="email"
          className="eMail"
          placeHolder={userInfoNew.email}
          type="text"
          value={userInfoNew.email}
          onChange={handleChange}
        />
        <label className="cardWebsite">LinkedIn </label>
        <input
          id="linkedin"
          className="webSite"
          placeHolder={userInfoNew.linkedin}
          type="text"
          value={userInfoNew.linkedin}
          onChange={handleChange}
        />

        <div className="dash-edit-btns">
          <Link to="/dashboard">
            <button>
              <i class="fas fa-angle-left"></i>
            </button>
          </Link>
          <button type="submit">
            <i class="fas fa-check"></i>
          </button>
        </div>
      </form>
    </section>
  );
};
export default DashboardEdit;
