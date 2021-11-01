import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { Link } from "react-router-dom";

const API = apiURL();

const ConnectionsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const user = useContext(UserContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setDisplayList((_) => {
      return [...friendsList].filter(
        (friend) =>
          friend.display_name
            .toLowerCase()
            .indexOf(e.target.value.toLowerCase()) > -1
      );
    });
  };

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axios.get(`${API}/users/${user.uid}/connections`);
        setFriendsList((_friendsList) => {
          setDisplayList(res.data);
          return res.data;
        });
      } catch (error) {
        return error;
      }
    };
    fetchList();
  }, [user]);

  const deleteConnection = async (friendId) => {
    try {
      await axios.delete(`${API}/users/${user.uid}/connections/${friendId}`);

      setFriendsList(
        friendsList.filter(({ user1_id, user2_id }) => {
          return user1_id !== friendId && user2_id !== friendId;
        })
      );
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <label htmlFor="search-bar"></label>
      <input
        className="search-bar"
        name="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Link to="/dashboard" className="connections-btn">
        <button>back</button>
      </Link>
      <table className="connections-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>LinkedIn</th>
            <th>Twitter</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {displayList ? (
            <>
              {displayList.map((friend, idx) => {
                const {
                  id,
                  display_name,
                  linkedin,
                  email,
                  twitter,
                  phone_number,
                  uid,
                } = friend;
                return (
                  <tr key={idx} to={`/connections/${id}`}>
                    <td>{display_name}</td>
                    <td>
                      <a href={`mailto:${email}`}>{email}</a>
                    </td>
                    <td>
                      <a href={linkedin}>{linkedin}</a>
                    </td>
                    <td>
                      <a href={twitter}>{twitter}</a>
                    </td>
                    <td>
                      <a href={`tel:${phone_number}`}>{phone_number}</a>
                    </td>
                    <td>
                      <button onClick={() => deleteConnection(uid)}>X</button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <h1>You have no connections</h1>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ConnectionsList;
