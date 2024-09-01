'use client'

import React from 'react'
import { Cell } from '../../lib/store/useGrid'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

type BuildPageProps = {
  readonly cell: Cell
  readonly children?: React.ReactNode
}

export default function Build(props: {
  cell: Cell,
  children?: React.ReactNode
}) {
  const router = useRouter();

  return (
    <>
      {props.cell}
      {/* Quello che scrivo da dentro page*/}
      {props.children}
      <Button
        onClick={() => router.push(`/build-menu/${props.cell.cellId}`)}
      >
        {props.cell.build?.buildType ?? "Build"}
        {props.cell.type ?? 'ERROR'}
      </Button>
    </>
  )
}
