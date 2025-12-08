import { useState, useEffect } from "react";

export default function useFetchGenre() {
    const [fetchedGenres, setFetchedGenres] = useState([]);

    useEffect(() => {
        const AllGenres = async () => {
            try {
                const response = await fetch("/genres");
                if (response.ok) {
                    const data = await response.json();
                    //just data would be books object!
                    setFetchedGenres(data.genres);
                }
            } catch (err) {
                console.error("caught: ", err)
            }
        };
        AllGenres();
    }, [])
    return fetchedGenres;
}