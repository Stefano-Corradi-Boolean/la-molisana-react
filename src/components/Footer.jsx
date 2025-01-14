import Logo from './partials/Logo'

const Footer = (props) => {

  const { menus } = props;

  return (
    <footer className="container">
      <nav className="footer-nav">
        <div className="footer-col">
          <Logo />
        </div>
        <div className="footer-col">
          <div>
            <h4>Pastificio</h4>
            <ul>
              {menus.menuPastificio.map(item => (
                <li key={`pa-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div>
            <h4>Prodotti</h4>
            <ul>
              {menus.menuProdotti.map(item => (
                <li key={`pr-${item.id}`}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </footer>
  )
}

export default Footer
