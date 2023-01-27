import type { Dispatch, SetStateAction, ReactNode } from 'react'
import type { CustomNodeData, IData } from '@/global-types'

export interface IGlobalContext {
  selectedTerm: CustomNodeData | null
  setSelectedTerm: Dispatch<SetStateAction<CustomNodeData | null>>
  data: IData | null
  setData: Dispatch<SetStateAction<IData | null>>
}

export interface GlobalContextProps {
  children: ReactNode
}
