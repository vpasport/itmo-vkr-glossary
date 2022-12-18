import type { FC } from 'react'
import type { Edge, Node, Connection } from 'reactflow'

import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  MarkerType,
} from 'reactflow'

import { initialEdges, initialNodes } from './constants'

import 'reactflow/dist/style.css'
import styles from './style.module.scss'

export const Nodes: FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  return (
    <div className={styles.nodes}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid
        //   edgeTypes={edgeTypes}
        fitView
        attributionPosition="top-right"
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}
