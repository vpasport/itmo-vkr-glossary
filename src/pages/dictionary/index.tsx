import type { FC } from 'react'

import { Header, Term } from '@/components'
import { initialNodes } from '@/constants'

import styles from './dictionary.module.scss'

export const Dictionary: FC = () => {
  return (
    <div className={styles.dictionary}>
      <Header />
      {initialNodes.map((el) => (
        <Term key={el.id} term={el.data.term} meaning={el.data.meaning} />
      ))}
    </div>
  )
}
