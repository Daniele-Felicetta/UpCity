import { Stack } from '@mui/material'
import React from 'react'
import CellBase from '../CellBase'
import { Cell } from '@/lib/store/useGrid'
import CellLayout from './CellLayout'

type HomeProps = {
    readonly cell: Cell
}

export default function Home({ cell }: HomeProps) {
    return (
        <CellLayout cell={cell} />
    )
}
