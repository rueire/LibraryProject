import { useEffect, useState } from "react";
import useFetchGenre from "../components/useFetchGenres";
import { useNavigate } from "react-router";
import FilterBooks from "../components/filtering";
// import { useNavigate } from "react-router";

export default function MainPage() {

    const [randomGenre, setRandomGenre] = useState("");
    const genres = useFetchGenre();
    const navigate = useNavigate();
    
    //randomized genre, useeffect to only render once
    useEffect(() => {
        // Do not refresh randomgenre 
        if (randomGenre !== "") return;

        if (genres.length > 0) {
            const idx = Math.floor(Math.random() * genres.length)
            setRandomGenre(genres[idx].genre)
        }
    }, [genres, randomGenre]);

    function handleNav() {
        navigate(`/filter/genre/${randomGenre}`);
    };

    return (
        <div className="resultspage-wrap">
            <div className="genre-label-container" onClick={handleNav}>
                <h3>{randomGenre || 'Loading...'}</h3>
            </div>
            <FilterBooks genre={randomGenre}/>
        </div>
    )
}