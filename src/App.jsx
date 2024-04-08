import Home from "./components/Home";
import Explore from "./components/Explore"
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route exact path="/"
        element={<Home/>}
        />
        <Route exact path="/explore"
        element={<Explore/>}
        />
      </Routes>
    </Router>
    </>
  )
}
export default App