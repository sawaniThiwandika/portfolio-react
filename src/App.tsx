import { useEffect, useState } from "react";
import { Portfolio } from "./components/Portfolio.tsx";
import { LoaderIcon } from "lucide-react"; // Importing Lucide React icons
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`app-container ${loading ? "blurred" : ""}`}>
            {loading && (
                <div className="loader-container">
                    <LoaderIcon className="loader-icon" />
                </div>
            )}
            <Portfolio />
        </div>
    );
}

export default App;
