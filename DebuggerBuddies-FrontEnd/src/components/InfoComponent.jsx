import "../styles/index.css"
import axios from "axios";
import {useEffect} from "react";
export default function InfoComponent(props){

    function  deleteIt(){
        axios({
            method: 'delete',
            url: 'http://localhost:8080/api/v1/registration/removeuser',
            data: {
                id: props.id,
                firstname: props.firstName,
                lastName:props.lastName,
                email:props.email,
                userRole:props.role,
                password:props.password
            }
        }).then(()=>location.reload())

    }


    return(
        <div className={"the-info-card"}>
            <p><span>ID</span>: {props.id} </p>
            <p><span>Name</span>: {props.firstName} {props.lastName} </p>
            <p><span>Email</span>: {props.email}</p>
            <p><span>Role</span>: {props.role}</p>

            <div className={"butts"}>
                <button id={"update-btn"}>Update</button>
                <button onClick={deleteIt} id={"remove-btn"}>Remove</button>
            </div>


        </div>
    )
}