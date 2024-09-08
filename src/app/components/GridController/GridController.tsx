'use client'

import { Box, Stack } from "@mui/material";
import { Cell, useGrid } from "@/lib/store/useGrid";
import { useEffect, useState } from "react";
import Build from "@/app/components/Build";
import CellBase from "../Cells/CellBase";

export default function GridController() {

  const { gameGrid, setGrid } = useGrid()

  const [tempBuild, setTempBuild] = useState<Cell[][]>([[]])

  const gridSample: Cell[][] = Array.from(Array(40)).map((_, i) => {
    return Array.from(Array(3)).map((_, j) => {
      if (i === 3 && j === 2) {
        const myType = "build"
        const myCell: Cell = {
          cellId: `${i}-${j}-${myType}`,
          build: {
            buildType: myType
          },
          type: myType
        }
        return myCell;
      }
      const defaultType = "empty"
      return {
        cellId: `${i}-${j}-${defaultType}`,
        type: defaultType
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
      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        paddingX={1}
      >
        {gameGrid.map((row, rowIndex) =>
          row.map((cell, cellIndex) =>
            <Stack
              key={`${rowIndex}-${cellIndex}`}
              sx={{
                maxHeight: 200,
                maxWidth: 200,
                minHeight: 100,
                minWidth: 100,
                width: 50,
                height: 50,
                padding:1
              }}
            >
              <CellBase
                cell={cell}
              >
              </CellBase>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
}