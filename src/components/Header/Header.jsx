import { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dog from '../../Assets/dogs.svg?react'
import { UserContext } from '../../GlobalContext/UserContext'


const Header = () => {
  const { data } = useContext(UserContext)


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
          <Dog/>
        </Link>
        {data ?(
        <Link className={styles.login} to="/conta">
          {data.nome}
        </Link>
        ):
        <Link className={styles.login} to="/login">
          Login/ Criar Login
        </Link>
        }
      </nav>
    </header>
  )
}

export default Header
