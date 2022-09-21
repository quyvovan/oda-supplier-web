// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Rating = (theme: Theme) => ({
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main,
        },
      },
    },
  })

export default Rating
