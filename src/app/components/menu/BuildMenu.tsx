import { Box, Stack } from "@mui/material";
import { Cell } from "../../../lib/store/useGrid";

export default function BuildMenu({ cell }: { cell: Cell }) {
  if (cell) {
    return (
      <Stack>
        Ciaoo
        <Box>
          {Object.keys(cell).map((key, index) => {
            console.log(key)
            return (
              <Box key={index}>
                {key.slice(5)}
              </Box>
            )
          }
          )}
        </Box>
      </Stack>

    )
  }
  return (
    <Stack>
      Next Js
    </Stack>
  )
}
