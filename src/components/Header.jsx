import Logo from './partials/Logo'

const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#" className="active">Prodotti</a></li>
          <li><a href="#">Chi siamo</a></li>
          <li><a href="#">Contatti</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
