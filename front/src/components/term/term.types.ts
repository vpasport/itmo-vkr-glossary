import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TermProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  term: string
  meaning: string
}
