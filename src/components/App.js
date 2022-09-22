
import React from "react";
import { Header } from "./Header";
import { MainSection } from "./MainSection";



// app component
export const App = function() {
    const [currentSection, setCurrentSection] = React.useState("about me")
    
    return(
        <div>
            <Header />
            <MainSection />
        </div>
    )
}