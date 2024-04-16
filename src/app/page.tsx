'use client'

import { Box, Stack } from "@mui/material";
import { Cell, useGrid } from "./lib/store/useGrid";
import { useEffect, useState } from "react";
import Build from "./components/Build";

export default function Home() {

  const { gameGrid, setGrid } = useGrid()

  const [tempBuild, setTempBuild] = useState<Cell[][]>([[]])

  useEffect(() => {
    const newCell = {}
    const exampleCell={
      buildType: "arrosto"
    }
    setGrid([
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, exampleCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],
      [newCell, newCell, newCell],

    ])
  }, [setGrid])

  return (
    <Stack>
      <Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap:5,
            columnGap: 1
          }}
        >
          {gameGrid.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <Stack
                key={`${rowIndex}-${cellIndex}   `}
                sx={{
                  width: "100%",
                  height: "100%",
                  border: cell.buildType ? "2px solid black": "1px dashed white",
                  justifyContent: "space-between",
                  alignItems: "center",

                  paddingY:3
                }}
              >
                <Build
                  buildProps={cell}
                >
                  {cell.buildType ? cell.buildType : ''}
                </Build>
              </Stack>
            ))
          )}

        </Box>
      </Stack>
    </Stack>
  );
}
