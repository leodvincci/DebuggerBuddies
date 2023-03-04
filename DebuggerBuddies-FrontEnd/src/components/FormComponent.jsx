import "../styles/index.css"
import {useState} from "react";

export default function FormComponent(props){
    const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",userRole:""})
    console.log(formData)

    function hello(event){
        setFormData(prevState => {
            return {
                ...prevState,[event.target.name]:event.target.value
            }
        })
    }


    function submitHandler(e){
        // Example POST method implementation:

        fetch('http://localhost:8080/api/v1/registration/createnewuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))

    }

    return(


            <div className={"admin-form"}>

                <h2>{props.formType}</h2>
                <form className={"admin-input"} action="">
                    <input
                        name={"firstName"}
                        onChange={hello} type="text"
                        placeholder={"First Name"}
                        value={formData.firstName}
                    />
                    <input name={"lastName"} onChange={hello} type="text" placeholder={"Last Name"} value={formData.lastName}/>
                    <input name={"email"} onChange={hello} type="email" placeholder={"Email"} value={formData.email}/>
                    <input name={"password"} onChange={hello} type="text" placeholder={"Password"} value={formData.password}/>
                    <input name={"userRole"} onChange={hello} type="text" placeholder={"Role"} value={formData.userRole}/>
                </form>

                <button type="button" onClick={submitHandler} className={`btn btn-${props.btnType}`}>{props.btnTxt}</button>
            </div>

    )

}