// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Popover = (theme: Theme) => ({
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            boxShadow: theme.shadows[6],
          },
        },
      },
    },
  })

export default Popover
