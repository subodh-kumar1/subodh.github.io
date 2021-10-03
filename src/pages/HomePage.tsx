import { Button } from "@mui/material"
import React from "react"
import CustomAppBar from "../components/organisms/CustomAppBar/CustomAppBar";
import CustomCarousal from "../components/organisms/CustomCarousal/CustomCarousal";


const HomePage = () => {
    return <React.Fragment>
        <CustomAppBar/>
        <CustomCarousal/>
        <Button color="primary" variant="outlined">My Button</Button>
        <Button color="secondary" variant="contained">My Button</Button>
    </React.Fragment>
}
export default HomePage;