import { Box, Stack } from "@mui/material";
import { Cell } from "../../lib/store/useGrid";

export default function BuildMenu({cell}: {cell:Cell}) {
  function nameFromKey (key:string){
    const sub = key.split('')
  }
  return (
    <Stack>
      <Box className="grid">
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
