import React, { useMemo, useState } from 'react';
import { EmptyAccountsContentSection } from '../accounts.styles';
import ViewCard from 'components/DashboardComponents/Cards/ViewCards';
import styled from 'styled-components';

import CustomPagination from 'components/DashboardComponents/Pagination';

const ViewSectionStyle = styled.section`
    display: flex;
    flex-flow: row wrap;
    padding: 12px 0 ;
`;

let PageSize = 6;

const ViewSection = ({array, type, useStatus}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return array.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
    <ViewSectionStyle>
        {/* <EmptyAccountsContentSection>
        <h6>You have no information to view yet.</h6>
        </EmptyAccountsContentSection> */}
        {/* course.status === 0 && */}
        {
            currentTableData?.map (module => (
            <ViewCard
                key={module.id}
                sectionType={type}
                {...module}
            />
            ))
        }
            <CustomPagination
            currentPage={currentPage}
            totalCount={array?.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
            /> 

    </ViewSectionStyle>
    );
};

export default ViewSection;
