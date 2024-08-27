'use client'

import React from 'react'
import { Cell } from '../lib/store/useGrid'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Build(props: {
  buildProps: Cell,
  children: React.ReactNode
}) {
  const router = useRouter();
  return (
    <>
      {/* Quello che scrivo da dentro page*/}
      {props.children}
      <Button onClick={() => router.push(`/${props.buildProps.cellId}`)}>
        Menù
      </Button>
    </>
  )
}
