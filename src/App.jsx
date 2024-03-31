import { BrowserRouter } from "react-router-dom"
import DataProcessing from "./DataProcessing/DataProcessing"
import MainRouter from "./MainRouter"
import Theme from "./Components/Theme"
import "./index.css"
function App() {


  return (
    <DataProcessing>
      <Theme>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Theme>
    </DataProcessing>
  )
}

export default App
