import type { FC, MouseEventHandler } from 'react'
import type { CustomNodeProps } from './node.type'

import { useContext, memo, useCallback } from 'react'
import { Handle, Position } from 'reactflow'

import { GlobalContext } from '@/contexts'

import styles from './style.module.scss'
import classnames from 'classnames'

export const Node: FC<CustomNodeProps> = memo(function Node({
  data: { topSource = true, ...data },
}) {
  const { setSelectedTerm } = useContext(GlobalContext)

  const onClick = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedTerm(data)
  }, [])

  return (
    <>
      {topSource && (
        <Handle
          type="target"
          position={Position.Top}
          className={classnames(styles.dot, styles.dot_top)}
        />
      )}
      <div className={styles.container} onClick={onClick}>
        <p className={styles['container-term']}>{data.term}</p>
        <p className={styles['container-meaning']}>{data.meaning}</p>
      </div>
      {data.bottomSource && (
        <Handle
          type="source"
          position={Position.Bottom}
          className={classnames(styles.dot, styles.dot_bottom)}
        />
      )}
    </>
  )
})

export { Position }
