import type { Edge } from 'reactflow'

import { MarkerType } from 'reactflow'

export const initialEdges: Edge[] = [
  {
    id: 'edge-1',
    source: 'term-1',
    target: 'term-2',
    className: 'normal-edge',
  },
  {
    id: 'edge-2',
    source: 'term-1',
    target: 'term-3',
    className: 'normal-edge',
  },
  {
    id: 'edge-3',
    source: 'term-2',
    target: 'term-4',
    className: 'normal-edge',
  },
  {
    id: 'edge-4',
    source: 'term-2',
    target: 'term-5',
    className: 'normal-edge',
  },
  {
    id: 'edge-5',
    source: 'term-2',
    target: 'term-6',
    className: 'normal-edge',
  },
  {
    id: 'edge-6',
    source: 'term-3',
    target: 'term-7',
    className: 'normal-edge',
  },
]
