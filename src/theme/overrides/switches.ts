// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Switch = (theme: Theme) => ({
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-track': {
            backgroundColor: `rgb(${theme.palette.customColors.main})`,
          },
        },
      },
    },
  })

export default Switch
