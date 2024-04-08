import {Provider} from "react-redux"
import store from "../utils/store"
import MainComponent from './MainComponent'

function Home ()  {
  return (
    <Provider store={store}>
    <div>
        
        <MainComponent/>
    </div>
    </Provider>
  )
}
export default Home


