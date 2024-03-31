import { useEffect, useState } from "react";

export default function ThemeController() {
    //eslint-disable-next-line
    const [light, setLight] = useState(false);
    useEffect(() => {
        const storedLightState = localStorage.getItem("themeLight");
        if (storedLightState !== null) {
            setLight(storedLightState === "true");
        }
    }, []);

    const handleMode = () => {
        const newLightState = !light;
        setLight(newLightState);
        localStorage.setItem("themeLight", newLightState.toString());
    };

    return (
        {
            light, handleMode
        }
    )
}
