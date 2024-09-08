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
    <CellLayout cell={cell}>
      <Button
        onClick={() => router.push(`/build-menu/${cell.cellId}`)}
      >
        {cell.build?.buildType ?? "Build"}
        {cell.type ?? 'ERROR'}
      </Button>
    </CellLayout>
    
  )

}
