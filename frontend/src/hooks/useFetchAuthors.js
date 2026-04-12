import { useState, useEffect } from "react";

export default function useFetchAuthors() {
  const [fetchedAuthors, setFetchedAuthors] = useState([]);

  useEffect(() => {
    const AllAuthors = async () => {
      try {
        const response = await fetch("/authors");
        if (response.ok) {
          const data = await response.json();
          setFetchedAuthors(data.authors);
        }
      } catch (err) {
        console.error("caught: ", err);
      }
    };
    AllAuthors();
  }, []);
  return fetchedAuthors;
}
