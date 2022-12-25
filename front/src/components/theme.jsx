import {createTheme} from "@mui/material";
export const theme=createTheme({
    palette:{
        
    },
    components: {
MuiDrawer: {
styleOverrides: {
    paper: {
        marginLeft:'56%',
        alignItems:"center",
        
        width:250,
        background:"darkblue",
        color:"white",
        borderRadius:"100px 0px  0px  0px ",
        borderRight:'1px solid '
    }
} 
},
    },
});
