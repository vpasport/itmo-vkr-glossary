import type { NodeProps, Position } from 'reactflow'

interface CustopNodeData {
  label: string
  targetPosition?: Position
  sourcePosition?: Position
}

export interface CustomNodeProps extends NodeProps {
  data: CustopNodeData
}
