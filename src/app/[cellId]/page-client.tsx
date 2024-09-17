
'use client'

import { Box, Stack, Typography } from "@mui/material"
import { Cell, useGrid } from "../../lib/store/useGrid"
import CellFlow from "../components/Cells/components/CellFlow"
import { isGeneratorObject } from "util/types"
import { DB } from "../db/abstractions/Db"

type CellPageClientProps = {
	readonly db : DB
}

export default function CellPageClient({ db }: CellPageClientProps) {
  const { gameGrid, setGrid } = useGrid()

  if  (db) {
    return (
      <>
        <Stack spacing={2}>
          <Typography variant="h1">
            MENU
          </Typography>
          <Box>
            {Object.entries(db.game.rooms).map(([key, value]) => (
              <Typography key={key}>{key}: {value.name}</Typography>
            ))}
          </Box>
          <Stack>
            Ciaoo
            <CellFlow></CellFlow>
          </Stack>
        </Stack>

      </>
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