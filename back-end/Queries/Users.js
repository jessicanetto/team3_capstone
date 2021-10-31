// const connections = require("../Controllers/connectionsController");
const db = require("../db/dbConfig");

// INDEX
const getUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return { success: true, payload: users };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// QUERY FOR POST ROUTE
const addUser = async (user) => {
  const {
    linkedin,
    twitter,
    email,
    display_name,
    photo_url,
    phone_number,
    uid,
  } = user;
  try {
    const user = await db.one(
      "INSERT INTO users (linkedin, twitter, email, display_name, photo_url, phone_number, uid) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [linkedin, twitter, email, display_name, photo_url, phone_number, uid]
    );
    return { success: true, payload: user };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// SHOW
const getUserById = async (uid) => {
  try {
    const userById = await db.one("SELECT * FROM users WHERE uid=$1", uid);
    return { success: true, payload: userById };
  } catch (error) {
    return { success: false, payload: "not found" };
  }
};

// UPDATE
const updateUserById = async (uid, body) => {
  const { linkedin, twitter, email, display_name, photo_url, phone_number } =
    body;
  try {
    const updateUser = await db.one(
      "UPDATE users SET linkedin=$1, twitter=$2,  email=$3, display_name=$4, photo_url=$5, phone_number=$6 WHERE uid=$7 RETURNING *",
      [linkedin, twitter, email, display_name, photo_url, phone_number, uid]
    );
    return { success: true, payload: updateUser };
  } catch (error) {
    return { success: false, payload: error };
  }
};

// DELETE
const deleteUser = async (uid) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE uid=$1 RETURNING *",
      uid
    );
    return { success: true, payload: deletedUser };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

///users/:id/connections
//GET list of all connections by user
const getAllConnectionsForUser = async (uid) => {
  try {
    const connectionsByUser = await db.any(
      ` SELECT * FROM users JOIN connections ON users.uid = connections.user1_id OR users.uid = connections.user2_id
        WHERE (connections.user1_id=$1 OR connections.user2_id=$1) 
        AND users.uid != $1`,
      uid
    );
    return connectionsByUser;
  } catch (error) {
    return (error);
  }
};

//add a connection to user's collection
//POST /users/:id/connections/:connections_id
const addNewConnectionToUser = async (user1_id, user2_id) => {
  try {
    let add = await db.none(
      `INSERT INTO connections (user1_id, user2_id) VALUES ($1, $2)`,
      [user1_id, user2_id]
    );
    return !add;
  } catch (error) {
    return (error);
  }
};

//delete a connection from a user's collection
//DELETE /users/:id/connections/:connections_id

const deleteConnectionFromUser = async (user1_id, user2_id) => {
  try {
    let remove = await db.none(
      `DELETE FROM connections WHERE user1_id=$1 AND user2_id=$2`,
      [user1_id, user2_id]
    );
    return !remove;
  } catch (error) {
    return (error);
  }
};
module.exports = {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUserById,
  getAllConnectionsForUser,
  addNewConnectionToUser,
  deleteConnectionFromUser,
};
