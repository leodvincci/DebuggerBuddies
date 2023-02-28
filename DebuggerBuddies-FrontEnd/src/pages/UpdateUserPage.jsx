import FormComponent from "../components/FormComponent.jsx";


export default function UpdateUserPage(){
    return(

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <FormComponent btnType={"warning"} btnTxt={"update"} formType={"Update User"}/>
        </div>

    )
}