import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Alert from './components/partials/Alert'
import { menuHeader, menuFooter } from "./data/menuData"

const slogan = "Molisana pasta sana!";

const App = () => {
  return (
    <>
      <Header menu={menuHeader} slogan={slogan} />

      <Alert type="error">
        <ul>
          <li>errore 1</li>
          <li>errore 2</li>
          <li>errore 3</li>
        </ul>
      </Alert>

      <Main />
      <Footer menus={menuFooter} />
    </>
  )
}

export default App
