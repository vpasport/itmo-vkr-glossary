import type { FC } from 'react'
import type { CustomNodeData } from '@/global-types'
import type { GlobalContextProps, IGlobalContext } from './global-context.types'

import { createContext, useState } from 'react'

import { initialValues } from './initial'

export const GlobalContext = createContext<IGlobalContext>(initialValues)

export const GlobalContextProvider: FC<GlobalContextProps> = ({ children }) => {
  const [selectedTerm, setSelectedTerm] = useState<CustomNodeData | null>(
    initialValues.selectedTerm,
  )

  return (
    <GlobalContext.Provider value={{ selectedTerm, setSelectedTerm }}>
      {children}
    </GlobalContext.Provider>
  )
}
