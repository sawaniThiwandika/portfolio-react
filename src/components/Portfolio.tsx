import { NavBar } from "./NavBar.tsx";
import { Intro } from "./Intro.tsx";
import { AboutMe } from "./AboutMe.tsx";
import { TechStack } from "./TechStack.tsx";
import { Service } from "./Service.tsx";
import { Projects } from "./Projects.tsx";
import { ContactMe } from "./ContactMe.tsx";
import { useState } from "react";

export function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black "} min-h-screen transition-all justify-items-center`}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="container mx-auto px-6 flex flex-col items-center">
                <Intro />
                <AboutMe />
                <TechStack />
                <Service />
                <Projects />
                <ContactMe />
            </div>
        </div>
    );
}
