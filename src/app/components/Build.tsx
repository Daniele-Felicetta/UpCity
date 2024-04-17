'use client'

import React from 'react'
import { Cell } from '../lib/store/useGrid'
import BuildMenu from './menu/BuildMenu'
import { Button } from '@mui/material'

export default function Build(props: {
  buildProps: Cell,
  children: React.ReactNode
}) {
  const [seeMenu, setSeeMenu] = React.useState(false)

  if (seeMenu) {
    return (
      <BuildMenu
        cell={props.buildProps}
      />
    )
  }
  return (
    <>
      {/* Quello che scrivo da dentro page*/}
      {props.children}
      {

      }
      <Button onClick={() => setSeeMenu(true)}>
        Menù
      </Button>
    </>
  )
}
