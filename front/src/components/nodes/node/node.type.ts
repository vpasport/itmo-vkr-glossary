import type { NodeProps } from 'reactflow'
import type { CustomNodeData } from '@/global-types'

export interface CustomNodeProps extends NodeProps {
  data: CustomNodeData
}
