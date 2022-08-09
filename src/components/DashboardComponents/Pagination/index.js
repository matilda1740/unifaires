import { ArrowBack, ArrowForward, ArrowLeft, ArrowRight } from '@mui/icons-material';
import { usePagination, DOTS } from 'hooks/usePaginations';
import React from 'react';
import { PaginationWrapper } from './pagination.styles';

const CustomPagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) { return null;}

    const onNext = () => onPageChange(currentPage + 1);

    const onPrevious = () => onPageChange(currentPage - 1);

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
    <PaginationWrapper>
        <li className={`pagination-pill ${currentPage === 1 ? "disabled" : ""}`} onClick={onPrevious}><ArrowBack />
        </li>
        {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
            <li
            className={`pagination-pill ${currentPage === pageNumber ? "selected" : "outlined"}`}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            >
            {pageNumber}
            </li>
        );
        })}
        <li className={`pagination-pill ${currentPage === lastPage ? "disabled" : ""}`} onClick={onNext}><ArrowForward /></li>
    </PaginationWrapper>
    );
};

export default CustomPagination;
