import styles from './Logo.module.css'

const Logo = (props) => {

  const { slogan } = props;

  return (
    <figure className={styles.logo}>
      <img src="/logo.png" alt="Logo" />
      <p>{slogan || 'Pasta fresca dal 1864'}</p>
    </figure>
  )
}

export default Logo
