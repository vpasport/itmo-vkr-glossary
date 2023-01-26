import type { Node, Edge } from 'reactflow'

export interface CustomNodeData {
  term: string
  meaning: string
  bottomSource?: boolean
  topSource?: boolean
}

export interface IData {
  nodes: Node<CustomNodeData>[]
  edges: Edge[]
}
