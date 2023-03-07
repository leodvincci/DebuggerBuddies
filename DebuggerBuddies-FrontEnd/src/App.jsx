import './styles/App.css'
import AddNewUserPage from "./pages/AddNewUserPage.jsx";
import UpdateUserPage from "./pages/UpdateUserPage.jsx";
import ViewAllUsers from "./pages/ViewAllUsers.jsx";

function App() {

  return (
    <div className="App">
        <div className={"user-cards"}>
            <ViewAllUsers/>
        </div>
    </div>
  )
}

export default App
