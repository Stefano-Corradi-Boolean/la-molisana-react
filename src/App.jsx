import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { menuHeader, menuFooter } from "./data/menuData"

const slogan = "Molisana pasta sana!";

const App = () => {
  return (
    <>
      <Header menu={menuHeader} slogan={slogan} />
      <Main />
      <Footer menus={menuFooter} />
    </>
  )
}

export default App
