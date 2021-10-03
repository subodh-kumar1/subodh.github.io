import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import HomePage from "./pages/HomePage";
import theme from "./themes/theme";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HomePage/>
        </ThemeProvider>
    )
}
export default App;