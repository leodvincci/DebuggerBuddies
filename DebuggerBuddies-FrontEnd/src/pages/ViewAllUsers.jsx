import FormComponent from "../components/FormComponent.jsx";
import InfoComponent from "../components/InfoComponent.jsx";
import axios from "axios";
import React, {useEffect} from "react";

export default function ViewAllUsers(){
    const [userData, setUserData] = React.useState([])

   const getMyData = fetch("http://localhost:8080/api/v1/registration/getallusers")
       .then((response) => response.json())
       .then((data) => {return data})

    useEffect( ()=>{
        getMyData.then(d=>setUserData(d))

    },[])

    return(

        <div style={{display:"flex",justifyContent:"space-around    ",flexWrap:"wrap",marginTop:"100px",height:"100vh", width:"85vw"}}>

            {userData.map( (e)=>{
                return (
                    <InfoComponent key={e.id} id={e.id} firstName={e.firstName} lastName={e.lastName} email={e.lastName} role={e.userRole}/>
                )
            })}

        </div>
    )
}