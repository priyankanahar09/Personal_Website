import React, {useState, useEffect} from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import ResearchProjects from "./Research/ResearchProjects";
//import Projects from "./Projects/Projects";
import Proficiency from "./Proficiency/Proficiency";
import Achievements from "./Achievements/Achievements";
import ContactMe from "./ContactMe/ContactMe";
import Blog from "./Blog/Blog";

const Portfolio = () =>{
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        const splashScreenTimer = setTimeout(
        () => setShowSplashScreen(false),
        3500
        );
        return () => {
            clearTimeout(splashScreenTimer);
        };
    },[]);
    return (
        <div>
            {
                showSplashScreen ?
                    <SplashScreen />
                :null
            }
            <Navbar />
            <Introduction />
            <Skills />
            <Proficiency />
            <ResearchProjects/>
            <Blog/>
          
            <ContactMe />
            
        </div>
    );
}

export default Portfolio;