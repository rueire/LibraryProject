import FilterBooks from "./filteredBooks"
import FetchBooks from "./useFetchBooks"

export default function Home() {

    return(
        <div className='all_books_wrap'>
            <FilterBooks/>
            <FilterBooks/>
            <FilterBooks />
        </div>
        
    )
}