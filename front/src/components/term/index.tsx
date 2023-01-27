import type { FC } from 'react'
import type { TermProps } from './term.types'

import styles from './term.module.scss'
import classnames from 'classnames'

export const Term: FC<TermProps> = ({ term, meaning, className, ...props }) => {
  return (
    <div className={classnames(styles.term, className)} {...props}>
      <p className={styles['term-name']}>{term}</p>
      <p className={styles['term-meaning']}>{meaning}</p>
    </div>
  )
}
