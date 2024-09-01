'use client'

import React from 'react'
import { Cell } from '../../lib/store/useGrid'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

type BuildPageProps = {
  readonly cell: Cell
  readonly children?: React.ReactNode
}

export default function Build({cell, children}:BuildPageProps) {
  const router = useRouter();

  console.log(cell)

  return (
    <>
      {/* {cell} */}
      {/* Quello che scrivo da dentro page*/}
      {children}
      <Button
        onClick={() => router.push(`/build-menu/${cell.cellId}`)}
      >
        {cell.build?.buildType ?? "Build"}
        {cell.type ?? 'ERROR'}
      </Button>
    </>
  )
}
