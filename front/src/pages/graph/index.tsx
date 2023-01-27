import type { FC } from 'react'

import { useContext } from 'react'

import { GlobalContext } from '@/contexts'
import { Nodes, Term } from '@/components'

import styles from './graph.module.scss'

export const Graph: FC = () => {
  const { data, selectedTerm } = useContext(GlobalContext)

  return (
    <div className={styles.graph}>
      {selectedTerm && (
        <Term {...selectedTerm} className={styles['graph-term-block']} />
      )}
      {data && <Nodes data={data} />}
    </div>
  )
}
