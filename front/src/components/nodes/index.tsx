import type { FC, MouseEventHandler } from 'react'
import type { Connection } from 'reactflow'
import type { NodesProps } from './nodes.types'

import { useCallback, useContext, useState } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from 'reactflow'

import { GlobalContext } from '@/contexts'

import { Node as CustomNode } from './node'

import 'reactflow/dist/style.css'
import styles from './style.module.scss'

const nodeTypes = {
  custom: CustomNode,
}

export const Nodes: FC<NodesProps> = ({ data }) => {
  const { setSelectedTerm } = useContext(GlobalContext)

  const [nodes, , onNodesChange] = useNodesState(data.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges)

  const [instance, setInstance] = useState<any>()

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  const onClick = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.preventDefault()
    setSelectedTerm(null)
  }, [])

  const onSave = useCallback(() => {
    if (instance) {
      const flow = instance.toObject()
      console.debug(flow)
    }
  }, [instance])

  return (
    <div className={styles.nodes}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="top-right"
        maxZoom={1}
        minZoom={0.36}
        onClick={onClick}
        onInit={setInstance}
      >
        <Controls showInteractive={false} />
        {/* <button
          style={{
            position: 'fixed',
            bottom: 40,
            right: 40,
            zIndex: 10000,
          }}
          onClick={onSave}
        >
          save
        </button> */}
      </ReactFlow>
    </div>
  )
}
