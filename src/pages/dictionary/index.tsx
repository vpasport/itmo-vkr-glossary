import type { FC } from 'react'

import { useContext } from 'react'

import { GlobalContext } from '@/contexts'
import { Term } from '@/components'

import styles from './dictionary.module.scss'

export const Dictionary: FC = () => {
  const { data } = useContext(GlobalContext)

  return (
    <div className={styles.dictionary}>
      {data &&
        data.nodes.map((el) => (
          <Term key={el.id} term={el.data.term} meaning={el.data.meaning} />
        ))}
    </div>
  )
}
