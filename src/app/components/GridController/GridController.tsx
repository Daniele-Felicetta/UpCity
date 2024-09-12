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

/**
 * GridController Component
 * 
 * This component is responsible for rendering and managing the game grid.
 * It uses the useGrid hook to access and update the game state.
 * 
 * Key features:
 * - Initializes a sample grid with empty cells
 * - Uses useEffect to set the initial grid state
 * - Renders a grid of CellBase components
 * 
 * @component
 * @returns {JSX.Element} A Stack component containing the game grid
 */
/**
   * GridController Component
   * 
   * This component manages the game grid and handles the rendering of cells.
   * 
   * State:
   * - gameGrid: The current state of the game grid, managed by useGrid hook.
   * - tempBuild: A temporary state for building operations (currently not used).
   * 
   * Functions:
   * - setGrid: Function to update the game grid, provided by useGrid hook.
   * 
   * Grid Generation:
   * - gridSample: A 40x3 grid of cells, with a special "build" cell at position [3][2].
   * 
   * Effects:
   * - On component mount, initializes the grid with the gridSample.
   * 
   * Rendering:
   * - Displays the grid as a series of stacked rows.
   * - Each cell is rendered using the CellBase component.
   */