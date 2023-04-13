import type { FC } from 'react'

import { useLocation, useHistory } from 'react-router-dom'

import { GRAPH_ROUTE, MAIN_ROUTE } from '@/constants'

import { User } from './user'

import styles from './header.module.scss'

export const Header: FC = () => {
  const location = useLocation()
  const history = useHistory()

  return (
    <div className={styles.header}>
      <div
        className={styles['header-button']}
        onClick={() =>
          history.replace(
            location.pathname === GRAPH_ROUTE ? MAIN_ROUTE : GRAPH_ROUTE,
          )
        }
      >
        {location.pathname === GRAPH_ROUTE ? 'Словарь' : 'Карта'}
      </div>
      <User />
    </div>
  )
}
