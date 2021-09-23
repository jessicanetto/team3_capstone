import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const ConnectionsList = ( {uid} ) => {
  const [friendsList, setFriendsList] = useState([]);

  const fetchList = async () => {
    try {
      let res = await axios.get(`${API}/users/${uid}/connections`);
      console.log('this is res.data', res.data);
      setFriendsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [uid]);
  debugger
  return (
    <div>
      {friendsList.length ? (
        <>
          <h1>CONNECTIONS</h1> 
          {/* <h1>{friendsList.display_name}</h1> */}

          {/* <h1>{friendsList[0].display_name}</h1> */}

          <h1>{friendsList.map((friend) => {
            return friend.display_name
          })}</h1> 
        </>
      ) : (
        <>
          <h1>You have no connections</h1>
        </>
      )}
    </div>
  );
};

export default ConnectionsList;
