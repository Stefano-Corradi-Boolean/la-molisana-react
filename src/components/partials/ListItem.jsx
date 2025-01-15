

const ListItem = (props) => {
  return (
    <li >
      <a href={props.url} className={props.isActive ? 'active' : ''}>{props.text}</a>
    </li>
  )
}

export default ListItem
