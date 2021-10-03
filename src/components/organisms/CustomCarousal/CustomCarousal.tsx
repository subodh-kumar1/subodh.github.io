import { ArrowLeftSharp, ArrowRightSharp } from "@mui/icons-material";
import { Box, Button, Slide } from "@mui/material";
import React, { useState } from "react";
import DotIndicator from "../../atoms/DotIndicator/DotIndicator";
import image1 from "../../../assets/carousal-images/image1.jpg";
import image2 from "../../../assets/carousal-images/image2.jpg";
import image3 from "../../../assets/carousal-images/image3.jpeg";
import image4 from "../../../assets/carousal-images/image4.jpg";



export default function CustomCarousal() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<string | undefined>();
    const images = [
        image1,
        image2,
        image3,
        image4,
    ]
    return (
        <React.Fragment>
            <Box style={{position: 'relative'}}>
                <Box top="50%" left="16px" style={{position: 'absolute'}}>
                    <Button color="secondary" variant="contained" onClick={() => { setIndex((images.length + index - 1) % images.length); setDirection("right"); }}>
                        <ArrowLeftSharp/>
                    </Button>
                </Box>
                
                {
                    images.map(
                        (item, i) => i == index && 
                        <Slide direction={direction === "left" ? "left" : "right"} in={index === i}>
                            <img width="100%" src={item} alt={'carousal'} />
                        </Slide>
                    )
                }
                <Box top="50%" right="16px" style={{position: 'absolute'}}>
                    <Button color="secondary" variant="contained" onClick={() => { setIndex((index + 1) % images.length); setDirection("left"); }}>
                        <ArrowRightSharp/>
                    </Button>
                </Box>
            <Box width="100%" textAlign="center" bottom="16px"style={{position: 'absolute'}}>
                {
                    images.map(
                        (items, j) => index == j ? <DotIndicator selected />
                            :
                            <DotIndicator selected={false} />
                    )
                }
            </Box>
            </Box>
        </React.Fragment>

    );
}