import FormComponent from "../components/FormComponent.jsx";
import InfoComponent from "../components/InfoComponent.jsx";
import axios from "axios";
import React from "react";

export default function DeleteUserPage(){
    return(

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>



            <InfoComponent
                id={1}
                firstName={"Leo"}
                lastName={"Penrose"}
                email={"ldpenrose@gmail.com"}
                role={"Admin"}
            />

        </div>

    )
}