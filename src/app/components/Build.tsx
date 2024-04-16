'use client'

import { Box, Stack } from '@mui/material'
import React from 'react'
import { colors } from '../theme/colors'
import { Cell } from '../lib/store/useGrid'
import BuildMenu from './menu/BuildMenu'

export default function Build(props: {
  buildProps: Cell,
  children: React.ReactNode
}) {
  return (
    <Stack>
      <Stack
        sx={{
          
        }}
      >
        <BuildMenu
          cell={props.buildProps}
        />
        {props.children}
      </Stack>
    </Stack>
  )

}
