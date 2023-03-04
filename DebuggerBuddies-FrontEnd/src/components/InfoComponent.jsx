import "../styles/index.css"
export default function InfoComponent(props){
    return(
        <div className={"the-info-card"}>
            <p><span>ID</span>: {props.id} </p>
            <p><span>Name</span>: {props.firstName} {props.lastName} </p>
            <p><span>Email</span>: {props.email}</p>
            <p><span>Role</span>: {props.role}</p>

            <div className={"butts"}>
                <button id={"update-btn"}>Update</button>
                <button id={"remove-btn"}>Remove</button>
            </div>


        </div>
    )
}