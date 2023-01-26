import type { FC } from 'react'
import type { CustomNodeData } from '@/global-types'
import type { GlobalContextProps, IGlobalContext } from './global-context.types'

import { createContext, useState, useEffect } from 'react'

import { getData } from '@/services/data'

import { initialValues } from './initial'

export const GlobalContext = createContext<IGlobalContext>(initialValues)

export const GlobalContextProvider: FC<GlobalContextProps> = ({ children }) => {
  const [selectedTerm, setSelectedTerm] = useState<
    typeof initialValues['selectedTerm']
  >(initialValues.selectedTerm)
  const [data, setData] = useState<typeof initialValues['data']>(
    initialValues.data,
  )

  useEffect(() => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <GlobalContext.Provider
      value={{ selectedTerm, setSelectedTerm, data, setData }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
