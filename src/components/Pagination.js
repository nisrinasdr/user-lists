import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Pagination = ({userData}) => {
    const {dataPerPages, currentPage, setCurrentPage} = useGlobalContext()
    const totalPages = userData.length / dataPerPages
    const pages = []
    for(let i=1 ; i<totalPages+1 ; i++) {
        pages.push(i)
    }

    
    const handleDecrement = () => {
        setCurrentPage(currentPage-1)
        if(currentPage-1 < 1) {
            setCurrentPage(totalPages)
        }
    }

    const handleIncrement = () => {
        setCurrentPage(currentPage+1)
        if(currentPage+1 > totalPages) {
            setCurrentPage(1)
        }
    }

    return(
        <div className="pagination">
            <ul className="number-list">
                <li onClick={handleDecrement}>
                    <button 
                     className="prev"
                     >
                        <FaAngleDoubleLeft />
                    </button>
                </li>

                {pages.map(number => { return (
                    <li 
                     key={number} 
                     id={number}
                     className={number === currentPage? 'active' : null}
                     onClick={() => setCurrentPage(Number(number))}
                    >
                        {number}
                    </li>)
                })}

                <li onClick={handleIncrement}>
                    <button 
                     className="next"
                     >
                        <FaAngleDoubleRight />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination