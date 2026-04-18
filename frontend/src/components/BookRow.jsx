// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";



export default function BookRow({
    classWrapper,
    innerClass,
    arr,title,
    onClick,
    fallbackText }) {

    return (
        <>
        <div className="genre-label-container" onClick={onClick}>
            <h3>{title || 'Loading...'}</h3>
       </div>
        <div className={classWrapper}>
            {arr.length > 0 ? (
                arr.map((book) => (
                    <div className={innerClass} key={book.ISBN}>
                        <h3>{book.title}</h3>
                        <p>{book.release_year}</p>
                    </div>
                ))
            ) : (
                <p>{fallbackText}</p>
            )}
        </div>
        </>
    );
}
