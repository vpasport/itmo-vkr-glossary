import type { Dispatch, SetStateAction, ReactNode } from 'react'
import type { CustomNodeData } from '@/global-types'

export interface IGlobalContext {
  selectedTerm: CustomNodeData | null
  setSelectedTerm: Dispatch<SetStateAction<CustomNodeData | null>>
}

export interface GlobalContextProps {
  children: ReactNode
}
