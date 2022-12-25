
import {useEffect, useState} from 'react';
import {Box, createTheme, ThemeProvider,} from '@mui/material';
import Navbar from "./components/Navbar";
import Footer from "./components/styles/Footer";
import Banner from "./components/style/Banner";



function App() {
  
     const [mode, setMode] =useState("light");
     const darkTheme=createTheme({
      palette: {
        mode: mode,
      },
     });
  return (
    
<ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary"
      >
    
 
    <Navbar/>
    
    
    <Banner/>
    
    <Footer setMode={setMode} mode={mode}/>
    
    </Box>
        </ThemeProvider>
    
    
  );
}

export default App;

