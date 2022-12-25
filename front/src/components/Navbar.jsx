import { AppBar, Box, IconButton, Button, InputBase,  Modal, TextField, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {theme} from "./theme"
import { Divider, Drawer, List, ListItemButton, ListItemText, ThemeProvider } from "@mui/material";

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",

});
const StyledAppbar=styled(AppBar)({

   position:"static",

   dispay:"flex"
   

})

const Buttongrop= styled(Box)(({ theme }) => ({
    display:"none",
alignItems:"10px",
gap:"1px",
[theme.breakpoints.up("sm")]:{
    display:"flex"
}
}));
const Search = styled("div")(({ theme })=>({
backgroundColor:"silver",
padding:"0 10px",
borderRadius: theme.shape.borderRadius,
width:"50%",
dispay:"flex"
})

);
const Navbar= () => {
    const [opendisplaymusic, setOpendisplaymusic] =useState(false);
    const [opendisplayfilm, setOpendisplayfilm] =useState(false);
    const [opendisplayyou, setOpendisplayyou] =useState(false);
    const [openadddisplaymusic, setOpenadddisplaymusic] =useState(false);
    const [openadddisplayfilm, setOpenadddisplayfilm] =useState(false);
    const [openadddisplayyou, setOpenadddisplayyou] =useState(false);
    const [openaddmusic, setOpenaddmusic] =useState(false);
    const [openaddfilm, setOpenaddfilm] =useState(false);
    const [openaddyou, setOpenaddyou] =useState(false);
    
    const [openMobiel,setOpenMobile]=useState(false);
    
    
    return(
        
        <>
        <StyledAppbar position="sticky">
           <StyledToolbar >
           <Box sx={{display:"flex",
        marginLeft:2
        }}>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
           <img src="/assets/person/logo.jpg" alt="" className="sideImg"/>
           </Box>
           <Typography sx={{marginTop:4, }}variant="h6" components="h3">Maya Production</Typography>
            </Box>
            

          <Box sx={{ display:"flex"}}>
          <Buttongrop >
                <Button onClick={e=>setOpenadddisplaymusic(true)} variant="text"  sx={{color:"white"}}> music</Button>
                <Button onClick={e=>setOpenadddisplayfilm(true)} variant="text" sx={{marginLeft:2, color:"white"}}>MayaFlicks</Button>
                <Button onClick={e=>setOpenadddisplayyou(true)} variant="text"  sx={{marginLeft:2,color:"white"}}>YelbWeg</Button>
            </Buttongrop>
            <IconButton
            onClick={e=>setOpenMobile(true)}
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                sx={{mr:2 , display:{sm:"none"}}}
                >
                    <MenuIcon/>
                </IconButton>
          </Box>
          
            </StyledToolbar> 
            

        </StyledAppbar>


        <Modal
        open={opendisplaymusic}
        onClose={(e)=> setOpendisplaymusic(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box  width={500} height={455} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27} marginLeft={92}>
            <Box marginTop={-2.8}><Search ><InputBase placeholder="type to search the guest"/></Search>
            </Box> hello</Box> 
        </Modal>
        <Modal
        open={opendisplayfilm}
        onClose={(e)=> setOpendisplayfilm(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={500} height={455} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27}>
           <Box marginTop={-2.8}><Search ><InputBase placeholder="type to search the guest"/></Search>
            </Box>
            hello film</Box> 
        </Modal>
        <Modal
        open={opendisplayyou}
        onClose={(e)=> setOpendisplayyou(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={500} height={455} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27} >
           <Box marginTop={-2.8}><Search ><InputBase placeholder="type to search the guest"/></Search>
            </Box>
            hello youtube</Box> 
        </Modal>
        <Modal
        open={openadddisplaymusic}
        onClose={(e)=> setOpenadddisplaymusic(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={200} height={40} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27} >
        <Typography> Music Guests</Typography>
        <Box>
            <Button  onClick={e=>setOpenaddmusic(true)} variant="text">add</Button>
            <Button onClick={e=>setOpendisplaymusic(true)} variant="text">display</Button>
        </Box>
        </Box> 
        </Modal>
        <Modal
        open={openadddisplayfilm}
        onClose={(e)=> setOpenadddisplayfilm(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box bgcolor={"background.default"} color="text.primary" width={200} height={40}  p={3} borderRadius={1} marginTop={8.27} >
        <Typography>  Maya Flicks Guests</Typography>
        <Box>
            <Button onClick={e=>setOpenaddfilm(true)}  variant="text">add</Button>
            <Button onClick={e=>setOpendisplayfilm(true)} variant="text">display</Button>
        </Box>
        </Box> 
        </Modal>
        <Modal
        open={openadddisplayyou}
        onClose={(e)=> setOpenadddisplayyou(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={200} height={40} bgcolor="background.default" color="text.primary" p={3} borderRadius={1} marginTop={8.27} >
        <Typography>  Yelb Weg  Guests</Typography>
        <Box>
            <Button onClick={e=>setOpenaddyou(true)} variant="text">add</Button>
            <Button onClick={e=>setOpendisplayyou(true)} variant="text">display</Button>
        </Box>
        </Box> 
        </Modal>
        <Modal
        open={openaddmusic}
        onClose={(e)=> setOpenaddmusic(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={400} height={455} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27} >
           <Box marginTop={-2.8}>
            <Typography variant="h5" color="gray" textAlign="center">add the music gusts</Typography>
            
            <Box  marginLeft={4} marginTop="-4">
            <TextField id="standard-basics" label="Singer First Name" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="Singer Last Name" variant="standard"/>
            </Box>
            
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="Music Title" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="phone number" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="selled time" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="Price" variant="standard"/>
            </Box>
            <Box  marginLeft={12} marginTop={6}>
            <Button variant="outlined" >ADD</Button>
            </Box>
            </Box>
            </Box> 
        </Modal>
        <Modal
        open={openaddfilm}
        onClose={(e)=> setOpenaddfilm(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={400} height={350} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27} >
           <Box marginTop={-2.8}>
            <Typography variant="h5" color="gray" textAlign="center">add the film gusts</Typography>
            
            <Box  marginLeft={4} marginTop="-4">
            <TextField id="standard-basics" label="Film Title" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="Producer Name" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="Bought Time" variant="standard"/>
            </Box>
            <Box  marginLeft={4} marginTop={2}>
            <TextField id="standard-basics" label="price" variant="standard"/>
            </Box>
            
            <Box  marginLeft={12} marginTop={6}>
            <Button variant="outlined" >ADD</Button>
            </Box>
            </Box>
            </Box> 
        </Modal>
        <Modal
        open={openaddyou}
        onClose={(e)=> setOpenaddyou(false)}
        aria-labelledby="modal-modal-title"
        arial-describedby="modal-modal-description">
           <Box width={400} height={500} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={1} marginTop={8.27}  >
           <Box marginTop={-2.8} >
            
            <Typography variant="h5" color="gray" textAlign="center">add the YelbWeg guests</Typography>
            
            <Box  marginTop="-4" display="flex">
            <TextField id="standard-basics" label="First Guest name" variant="standard"/>
            <Box   marginTop={0}>
            <TextField id="standard-basics" label="Second Guest  Name" variant="standard"/>
            </Box>
            </Box>
            
            <Box   marginTop={2} display="flex">
            <TextField id="standard-basics" label="Third Guest Name" variant="standard"/>
            <Box   marginTop={0}>
            <TextField id="standard-basics" label="Ye Meareg Sim" variant="standard"/>
            </Box>
            </Box>
            
            <Box   marginTop={2}>
            <TextField  id="standard-basics" label="Phone Number" variant="standard"/>
            <Box  marginLeft={25} marginTop={-5} display="flex">
            <TextField
        id="date"
        label="Guest 1 Birthday"
        type="date"
        
        sx={{ width: 170 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Box>
            
            </Box>
            
            <Box  marginTop={0}>
            <TextField
        id="date"
        label="Guest 2 Birthday"
        type="date"
        
        sx={{ width: 170 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
            </Box>
            
            
            
            <Box   marginTop={2}>
            <TextField
        id="date"
        label="Guest 3 Birthday"
        type="date"
        
        sx={{ width: 170 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
            </Box>
            <Box  marginTop={0}>
            <TextField id="standard-basics" label="Ig User Name" variant="standard"/>
            </Box>
            <Box  marginLeft={18} marginTop={2}>
            <Button variant="outlined" >ADD</Button>
            </Box>
            </Box>
            </Box> 
        </Modal>



        <ThemeProvider theme={theme}>
<Drawer variant="body1" open={openMobiel}
onClose={(e)=>setOpenMobile(false)}
sx={{mr:2 , display:{sm:"none"}}}
>
            <List sx={{marginTop:'10%'}}>
                <ListItemButton>
                    <ListItemText onClick={e=>setOpenadddisplaymusic(true)}>
                        Music
                    </ListItemText>
                </ListItemButton>
                <Divider variant="middle"/>
                <ListItemButton onClick={e=>setOpenadddisplayyou(true)}>
                    <ListItemText>
                        MayaFlicks
                    </ListItemText>
                </ListItemButton>
                <Divider variant="middle"/>
                <ListItemButton onClick={e=>setOpenadddisplayyou(true)}>
                    <ListItemText>
                        YelbWeg
                    </ListItemText>
                </ListItemButton>
                
            </List>
        </Drawer>
        </ThemeProvider>
        </>
        
    );
};
export default Navbar;