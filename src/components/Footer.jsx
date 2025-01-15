import Logo from './partials/Logo'
import ListItem from './partials/ListItem';

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
                <ListItem
                  key={`pa-${item.id}`}
                  text={item.text}
                  url={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div>
            <h4>Prodotti</h4>
            <ul>
              {menus.menuProdotti.map(item => (
                <ListItem
                  key={`pr-${item.id}`}
                  text={item.text}
                  url={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </footer>
  )
}

export default Footer
