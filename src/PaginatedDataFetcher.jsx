import React, { useEffect, useState } from 'react'

export default function PaginatedDataFetcher() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5;
    const totalPages = Math.ceil(Math.ceil(data.length)/ itemPerPage);
    
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataRes = await response.json();
        setData(dataRes);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const startItems = (currentPage - 1) * itemPerPage;
    const items = data.slice(startItems, startItems + itemPerPage);

    const handlePrevious= () => {
        setCurrentPage(currentPage - 1);
    }

    const handleNext= () => {
        setCurrentPage(currentPage + 1);
    }

    return (
        <div>
            {items && items.map((item) => {
                return (
                    <ul>
                        <li key={item.id}>{item.id}</li>
                        <li>{item.title}</li>
                        <li>{item.body}</li>
                    </ul>
                )
            })}

            {currentPage}/{totalPages}
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next Page</button>
        </div>
    )
}
