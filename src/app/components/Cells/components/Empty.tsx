import { Cell } from '@/lib/store/useGrid'
import React from 'react'
import CellLayout from './CellLayout'

type EmptyProps = {
  readonly cell: Cell

}

export default function Empty({ cell }: EmptyProps) {
  return (
    <CellLayout cell={cell} />

  )
}
