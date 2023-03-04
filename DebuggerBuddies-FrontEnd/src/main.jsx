import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import App from './App'
import "./styles/index.css"
import AddNewUserPage from "./pages/AddNewUserPage.jsx";
import UpdateUserPage from "./pages/UpdateUserPage.jsx";
import DeleteUserPage from "./pages/DeleteUserPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"30px",fontSize:"25px"}}>
          <Link to={"/admin"}>View Users</Link>
              <Link to={"/admin/adduser"}>Add User</Link>
              <Link to={"/admin/updateuser"}>Update User</Link>
              <Link to={"/admin/deleteuser"}>Delete User</Link>
          </div>

          <Routes>
              <Route path="/admin" element={<App />} />
              <Route path="/admin/adduser" element={<AddNewUserPage />} />
              <Route path="/admin/updateuser" element={<UpdateUserPage />} />
              <Route path="/admin/deleteuser" element={<DeleteUserPage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
