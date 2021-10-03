import { Button, Container } from "@mui/material"
import React from "react"
import CustomAppBar from "../components/organisms/CustomAppBar/CustomAppBar";
import CustomCarousal from "../components/organisms/CustomCarousal/CustomCarousal";


const HomePage = () => {
    return <Container maxWidth="md">
        <CustomAppBar/>
        <CustomCarousal/>
        <Button color="primary" variant="outlined">My Button</Button>
        <Button color="secondary" variant="contained">My Button</Button>
    </Container>
}
export default HomePage;