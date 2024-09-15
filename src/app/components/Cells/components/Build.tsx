import React from 'react'
import CellBase from '../CellBase'
import { Cell } from '@/lib/store/useGrid'
import CellLayout from './CellLayout'
import Button from '../../button/Button'
import { useRouter } from 'next/navigation'

type BuildProps = {
  readonly cell: Cell
}

export default function Build({ cell }: BuildProps) {
  const router = useRouter();
  return (
    <CellLayout
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        color: 'white',
        fontSize: '1.5rem',
        margin: 1
      }}
      cell={cell}

    >
    </CellLayout>

  )

}
