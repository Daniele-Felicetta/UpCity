'use client'

import { Cell, useGrid } from "@/lib/store/useGrid";
import { Stack, Typography } from "@mui/material";
import { useEffect, } from "react";
import CellBase from "../Cells/CellBase";

export default function GridController() {
  const { gameGrid, setGrid } = useGrid()
  const gridSample: Cell[][] = Array.from(Array(40)).map((_, i) => {
    return Array.from(Array(3)).map((_, j) => {
      if (i === 0 && j === 0) {
        const myType = "build"
        const myCell: Cell = {
          cellId: `${i}-${j}-${myType}`,
          page: true,
          name: 'Torre Capa',
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
        type: defaultType,
        name: ''
      }
    })
  })


  useEffect(() => {
    setGrid([...gridSample]);
  }, [setGrid])

  const CELL_SIZE = 1.5
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
                maxHeight: 200 * CELL_SIZE,
                maxWidth: 200 * CELL_SIZE,
                minHeight: 100 * CELL_SIZE,
                minWidth: 100 * CELL_SIZE,
                width: 50 * CELL_SIZE,
                height: 50 * CELL_SIZE,
                padding: 2 * CELL_SIZE
              }}
            >
              <CellBase
                cell={cell}
                
              >
                <Typography
                  fontSize={20}
                >
                  {cell.name}
                </Typography>
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