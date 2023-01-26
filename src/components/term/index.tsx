import type { FC } from 'react'
import type { TermProps } from './term.types'

import styles from './term.module.scss'

export const Term: FC<TermProps> = ({ term, meaning }) => {
  return (
    <div className={styles.term}>
      <p className={styles['term-name']}>{term}</p>
      <p className={styles['term-meaning']}>{meaning}</p>
    </div>
  )
}
