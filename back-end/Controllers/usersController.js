const express = require("express");
const path = require('path');

const users = express.Router();
const {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUserById,
  getAllConnectionsForUser,
  addNewConnectionToUser,
  deleteConnectionFromUser,
} = require("../Queries/Users");

// const { checkFirebaseToken } = require("../middleware/auth");

// INDEX
users.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.json(allUsers);
  } catch (error) {
    return error;
  }
});

// CREATE
users.post("/", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.json(newUser);
  } catch (error) {
    return error;
  }
});

// SHOW
users.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    return error;
  }
});


//SHOW ROUTE FOR ONLY DISPLAY CARD AFTER SCANNING QR SCODE 

// users.use(express.static(__dirname))
users.get("/:id/card", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    // res.send(`<html><h2>${user.payload.display_name}</h2></html>`);
    res.sendFile(path.join(__dirname, '../index.html'))
  } catch (error) {
    return error;
    
  }
})
users.get('/:id/card', function(req, res) {
  res.sendFile(path.join(__dirname, '../style.css') )
})

// UPDATE
users.put("/:id", async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    return error;
  }
});

// DELETE
users.delete("/:id", async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    return error;
  }
});

//GET all connections by user
users.get("/:userId/connections", async (req, res) => {
  const { userId } = req.params;
  const userConnections = await getAllConnectionsForUser(userId);
  res.json(userConnections);
});

//POST a connection to user
users.post("/:userId/connections/:connectionId", async (req, res) => {
  const { userId, connectionId } = req.params;
  const succesfulAdd = await addNewConnectionToUser(userId, connectionId);
  res.json(succesfulAdd);
});

//DELETE a connection from user
users.delete("/:userId/connections/:connectionId", async (req, res) => {
  const { userId, connectionId } = req.params;
  const succesfulDelete = await deleteConnectionFromUser(userId, connectionId);
  res.json(succesfulDelete);
});
module.exports = users;
