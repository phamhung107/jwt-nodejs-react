import bcrypt from "bcryptjs";
import bluebird from "bluebird";
import mysql from "mysql2/promise";
import db from "../models/index.js";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);
  try {
    await db.User.create({
      username: username,
      email: email,
      password: hashPass,
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  let user = [];
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM user");
    return rows;
  } catch (error) {
    console.log("check error ", error);
  }
};
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM user WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("check error ", error);
  }
};
const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "Select * FROM user WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("check error ", error);
  }
};
const updateUserInfor = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "UPDATE user SET email = ?, username = ? WHERE id = ?",
      [email, username, id]
    );
    return rows;
  } catch (error) {
    console.log("check error ", error);
  }
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
