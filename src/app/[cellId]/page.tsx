'use client'

import { Box, Stack, Typography } from "@mui/material"
import { useGrid } from "../../lib/store/useGrid"
import CellFlow from "../components/Cells/components/CellFlow"

type BuildMenuProps = {
  readonly params: {
    readonly cellId: string
  }
}

export default function BuildMenu({ params }: BuildMenuProps) {
  const { gameGrid, setGrid } = useGrid()
  const cell = gameGrid.flat().find(cell => cell.cellId === params.cellId)

  if (cell) {
    return (
      <Stack>
        Ciaoo
        <Box>
          {Object.keys(cell).map((key, index) => {
            console.log(key)
            return (
              <Box key={index}>
                {key}
              </Box>
            )
          }
          )}
        </Box>
        <CellFlow></CellFlow>
      </Stack>

    )
  }
  return (
    <Stack>
      <Typography variant="h1">
        NESSUN MENU
      </Typography>
    </Stack>
  )
}