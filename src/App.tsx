import { useState, useEffect } from "react";
import { Portfolio } from "./components/Portfolio.tsx";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            {isLoading ? (
                <div className="loader">Loading...</div>
            ) : (
                <Portfolio />
            )}
        </div>
    );
}

export default App;
