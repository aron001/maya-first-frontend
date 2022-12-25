import { Box, Container, Grid, Typography , List ,ListItemText , ListItemButton, ListItem, Switch} from "@mui/material";
import { FooterTitle } from "./FooterTitle";
import { Instagram, Twitter,Facebook } from "@mui/icons-material";

export default function Footer({mode,setMode}){
    return(
        <Container >

        
       <Box   
       sx={{
        background: "black",
        color: "white",
       p:{ xs:4, md:10},
       pt:12,
       pb:12 ,
       fontSize: {xs: '12px', md:'14px'},
       width: {xs:'fitcontent'}

       }}>
        <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">AboutUs</FooterTitle>
            
            <Typography variant="caption">Maya production works in film industry in ethiopia and managed by amleset muche are </Typography>
            <Box sx={{
                marginTop:4,
                color:"gray",
                spacing:2
            }}>
            <Instagram/>
            <Facebook/>
           <Twitter/>

            </Box>
            
            
            </Grid>
            <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">Information</FooterTitle>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">about us </Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">privacy</Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">policy </Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">order tracking</Typography>
                
                </ListItemText>
            </List>
            
            
            </Grid>
            <Grid item md={6} lg={2}>
            <FooterTitle variant="caption2">Contact Us</FooterTitle>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">aron </Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">asrat</Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">dev </Typography>
                
                </ListItemText>
            </List>
            <List>
                <ListItemText>
                <Typography lineHight={2} variant="caption2">hena</Typography>
                
                </ListItemText>
            </List>
            </Grid>
            
            

        </Grid>
        <Grid container justifyContent="center" marginTop={4} >
        <Grid item  md={6} lg={4} >
                <FooterTitle variant="body1">Design and developed by DAHA</FooterTitle>
            <Typography sx={{ml:6}}></Typography>
            

            </Grid>
            <Grid item  md={6} lg={4} >
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="darkmode"/>
                            
                        <Switch onChange={e=>setMode(mode==="light" ? "dark":"light")}/>
                    </ListItemButton>
                </ListItem>
            

            </Grid>
        </Grid>
        
       </Box>
       </Container>
    )
}