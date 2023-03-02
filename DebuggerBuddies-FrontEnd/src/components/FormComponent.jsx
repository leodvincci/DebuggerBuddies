import "../styles/index.css"
import {useState} from "react";

export default function FormComponent(props){
    const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",role:""})
    console.log(formData)

    function hello(event){
        setFormData(prevState => {
            return {
                ...prevState,[event.target.name]:event.target.value
            }
        })
    }

    return(


            <div className={"admin-form"}>

                <h2>{props.formType}</h2>
                <form className={"admin-input"} action="">
                    <input name={"firstName"} onChange={hello} type="text" placeholder={"First Name"}/>
                    <input name={"lastName"} onChange={hello} type="text" placeholder={"Last Name"}/>
                    <input name={"email"} onChange={hello} type="email" placeholder={"Email"}/>
                    <input name={"password"} onChange={hello} type="text" placeholder={"Password"}/>
                    <input name={"role"} onChange={hello} type="text" placeholder={"Role"}/>
                </form>

                <button type="button" className={`btn btn-${props.btnType}`}>{props.btnTxt}</button>
            </div>

    )

}