import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import AboutMe from "../components/about/AboutMe";

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner></AppBanner>
      <AboutMe />
      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>
    </div>
  );
};

export default Home;
