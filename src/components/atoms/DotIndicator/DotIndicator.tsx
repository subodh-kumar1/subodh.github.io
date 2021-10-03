import { Box, } from "@mui/material"
import React from "react";


export interface DotIndicatorProps {
    selected: boolean,
}
const DotIndicator: React.FC<DotIndicatorProps> = (props) => {
    const {selected} = props;
    if (selected) {
        return <Box style={{
            backgroundColor: '#00FF00',
            border: '1px solid #FFFFFF',
            display:"inline-flex",
            marginLeft: '6px',
            marginRight: '6px',
        }} height="6px" width="6px" borderRadius="100%"/>;
    } else {
        return <Box style={{
            backgroundColor: "#FFFFFF",
            display:"inline-flex",
            marginLeft: '6px',
            marginRight: '6px',
        }} height="8px" width="8px" borderRadius="100%"/>;
    }
}

export default DotIndicator;