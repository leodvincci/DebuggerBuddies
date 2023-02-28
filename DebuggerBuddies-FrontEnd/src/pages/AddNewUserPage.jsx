import FormComponent from "../components/FormComponent.jsx";


export default function AddNewUserPage(){
    return(

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <FormComponent btnType={"success"} btnTxt={"save"} formType={"add new user"}/>
        </div>

    )
}