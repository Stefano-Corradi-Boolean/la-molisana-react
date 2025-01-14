import Logo from './partials/Logo'


const Header = (props) => {

  const menuItems = props.menu;
  const slogan = props.slogan

  return (
    <header>
      <Logo slogan={slogan} />
      <nav>
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.url} className={item.isActive ? 'active' : ''}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
