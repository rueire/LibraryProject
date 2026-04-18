import { useParams } from "react-router"
import FilterBooks from "../components/FilterBooks";


export default function ResultsPage() {
    const { value } = useParams();

    return (
        <div className="resultspage-wrap">
            <div>
                <FilterBooks genre={value}/>
            </div>
        </div>
    )
}