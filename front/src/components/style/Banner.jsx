import { useMediaQuery, useTheme ,Typography,Box} from "@mui/material";

import { BannerContainer,BannerContent, BannerTitle , BannerDescription , BannerImage} from "./bannerstyle";

export default function Banner(){
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Box>

       
<BannerContainer>
    <BannerImage src="/assets/person/music.jpg"/>
    <BannerContent>
        <Typography variant="h6">Maya Collection</Typography>
    <BannerTitle variant="h2">
        Maya Music
    </BannerTitle>
    <BannerDescription>
        Maya Music concerned in music production and buying and selling music 
    </BannerDescription>
    </BannerContent>
</BannerContainer>
<BannerContainer >
    
    <BannerContent>
        <Typography variant="h6">Maya Collection</Typography>
    <BannerTitle variant="h2">
        Maya Flicks
    </BannerTitle>
    <BannerDescription>
        Maya Music concerned in music production and buying and selling music 
    </BannerDescription>
    </BannerContent>
    <BannerImage src="/assets/person/flicks.jpg"/>
</BannerContainer>


</Box>
    );
}