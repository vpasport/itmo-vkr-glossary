import type { FC } from 'react'

import styles from './user.module.scss'

export const User: FC = () => {
  return (
    <a
      className={styles.user}
      href="https://vk.com/vpasport"
      target="_blank"
      rel="noreferrer">
      <span>Паспортников В.С. (P42072)</span>
      <img
        src="https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album"
        alt="avatar"
      />
    </a>
  )
}
