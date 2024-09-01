'use client'

import { Box, Stack } from "@mui/material";
import { Cell, useGrid } from "@/lib/store/useGrid";
import { useEffect, useState } from "react";
import Build from "@/app/components/Build";

export default function GridController() {

  const { gameGrid, setGrid } = useGrid()

  const [tempBuild, setTempBuild] = useState<Cell[][]>([[]])

  const gridSample: Cell[][] = Array.from(Array(40)).map((_, i) => {
    return Array.from(Array(3)).map((_, j) => {
      if (i === 3 && j === 2) {
        const cell: Cell = {
          cellId: `${i}-${j}`,
          build: {
            buildType: "Home"
          },
          type: 'Home'
        }
        return cell;
      }
      return {
        cellId: `${i}-${j}`,
        type: 'empty'
      }
    })
  })


  useEffect(() => {
    const newCell = {}
    const exampleCell = {
      buildType: "arrosto"
    }
    setGrid([...gridSample]);
  }, [setGrid])

  return (
    <Stack>
      <Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 5,
            columnGap: 1
          }}
        >
          {gameGrid.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <Stack
                key={`${rowIndex}-${cellIndex}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  border: cell.build?.buildType ? "2px solid black" : "1px dashed white",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingY: 3
                }}
              >
                <Build cell={cell}>
                  {cell.build?.buildType ?? ''}
                </Build>
              </Stack>
            ))
          )}

        </Box>
      </Stack>
    </Stack>
  );
}