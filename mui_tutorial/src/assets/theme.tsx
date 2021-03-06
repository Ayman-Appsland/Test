import { createTheme } from "@mui/material";
import {purple,orange,red} from '@mui/material/colors'
const  primaryColor=purple[600] 
const secondarycolor=orange[500]
const dangerColor=red[900]

const customTheme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondarycolor,
      },
      error:{
          main:dangerColor
      }
    },
    components: {
        MuiFab: {
            styleOverrides: {
            secondary: {
                '&:hover':{
                    color:"white"
                }
            },
            },
        },
        MuiAppBar:{
            styleOverrides: {
               root:{
                   background:dangerColor,
                   marginBottom:10
               } 
            },
        }
    }
  });

 export  default customTheme;