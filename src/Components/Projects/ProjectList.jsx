import { Container } from "@mui/material";
import ProjectsCard from "./ProjectsCard";

export default function ProjectList() {
    return (
        <Container sx={{ p: "80px 0px" }}>
             <ProjectsCard />
        </Container>
    )
}
