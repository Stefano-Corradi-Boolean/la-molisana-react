import Logo from './partials/Logo'
import ListItem from './partials/ListItem';


const Header = (props) => {

  const { menu, slogan } = props;

  return (
    <header>
      <Logo slogan={slogan} />
      <nav>
        <ul>
          {menu.map(item => (
            <ListItem
              key={item.id}
              text={item.text}
              url={item.url}
              isActive={item.isActive}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
