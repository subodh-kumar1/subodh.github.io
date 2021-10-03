import { ArrowLeftSharp, ArrowRightSharp } from "@mui/icons-material";
import { Box, Button, Slide } from "@mui/material";
import React, { useState, useRef } from "react";
import DotIndicator from "../../atoms/DotIndicator/DotIndicator";



export default function CustomCarousal() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<string | undefined>();
    const containerRef = useRef(null);
    
    const images = [
        "https://i.ibb.co/3fLD6dd/image1.jpg",
        "https://i.ibb.co/DVrN8zQ/image2.jpg",
        "https://i.ibb.co/grY2hbP/image3.jpg",
        "https://i.ibb.co/DYsmhHF/image4.jpg",
    ]
    return (
        <React.Fragment>
            <Box style={{position: 'relative', }} ref={containerRef}>
                <Box top="50%" left="16px" style={{position: 'absolute'}}>
                    <Button color="secondary" variant="contained" onClick={() => { setIndex((images.length + index - 1) % images.length); setDirection("right"); }}>
                        <ArrowLeftSharp/>
                    </Button>
                </Box>
                
                {
                    images.map(
                        (item, i) => i == index && 
                        <Slide direction={direction === "left" ? "left" : "right"} in={index === i} container={containerRef.current}>
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