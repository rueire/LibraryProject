import { useParams } from "react-router"
import FilterBooks from "../components/filtering";


export default function ResultsPage() {
    const { value } = useParams();

    return (
        <div className="resultspage-wrap">
            <div>
                <label>{value}</label>
            </div>
            <div>
                <FilterBooks genre={value}/>
            </div>
        </div>
    )
}