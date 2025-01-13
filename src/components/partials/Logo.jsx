import styles from './Logo.module.css'

const Logo = () => {
  return (
    <figure className={styles.logo}>
      <img src="/logo.png" alt="Logo" />
    </figure>
  )
}

export default Logo
