import { useState, useEffect } from "react";

const useTimeLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté avant le délai
    }, []);

    return loading;
};
 
export default useTimeLoading;