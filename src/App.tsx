import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import HomePage from "./pages/HomePage";
import theme from "./themes/theme";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <a href="https://github.com/subodh-kumar1/subodh.github.io">Code Here</a>
            <HomePage/>
        </ThemeProvider>
    )
}
export default App;