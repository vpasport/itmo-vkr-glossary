import type { FC } from 'react'
import type { CustomNodeProps } from './node.type'

import React from 'react'
import { Handle, Position } from 'reactflow'

import styles from './style.module.scss'

export const Node: FC<CustomNodeProps> = React.memo(function Node({
  data,
  isConnectable,
}) {
  return (
    <>
      <Handle
        type="target"
        position={data.targetPosition ?? Position.Top}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className={styles.container}>{data.label}</div>
      {data.sourcePosition && (
        <Handle
          type="source"
          position={data.sourcePosition}
          style={{ bottom: 10, top: 'auto', background: '#555' }}
          isConnectable={isConnectable}
        />
      )}
    </>
  )
})

export { Position }
