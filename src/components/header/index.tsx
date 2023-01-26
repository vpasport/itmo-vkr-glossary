import type { FC } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { User } from './user'

import styles from './header.module.scss'

export const Header: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  console.debug(location)

  return (
    <div className={styles.header}>
      <div
        className={styles['header-button']}
        onClick={() =>
          navigate(location.pathname === '/graph' ? '/' : '/graph')
        }
      >
        {location.pathname === '/graph' ? 'Словарь' : 'Карта'}
      </div>
      <User />
    </div>
  )
}
