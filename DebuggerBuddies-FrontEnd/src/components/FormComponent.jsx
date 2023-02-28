import "../styles/index.css"

export default function FormComponent(props){
    return(


            <div className={"admin-form"}>

                <h2>{props.formType}</h2>
                <form className={"admin-input"} action="">
                    <input type="text" placeholder={"First Name"}/>
                    <input type="text" placeholder={"Last Name"}/>
                    <input type="email" placeholder={"Email"}/>
                    <input type="text" placeholder={"Password"}/>
                    <input type="text" placeholder={"Role"}/>
                </form>

                <button type="button" className={`btn btn-${props.btnType}`}>{props.btnTxt}</button>
            </div>

    )

}