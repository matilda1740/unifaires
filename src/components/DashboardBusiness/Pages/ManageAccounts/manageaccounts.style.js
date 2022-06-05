import styled from 'styled-components';

export const ToolBarWrapper = styled.section`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F7F5FD;
    border-radius: 8px;
    
`;

export const ToolBarEach = styled.div`
    display: flex;
    /* border: 1px solid #EEEAFB; */
    width: 200px;
    height: 100%;
    padding: 12px 0 12px 20px;
    border-radius: 0px;
align-items: center;
    :nth-child(n+1) { margin-right: 0px; }

    h6 { 
        color: #082262; 
        text-transform: capitalize;
        margin-bottom: 0px; 

    }
    svg { 
        color: #082262; 
        margin-right: 10px; 
    }

    transition: all 0.3s ease-in-out;
    :hover { 
        cursor: pointer; 
        border-bottom: 2px solid rgba(88, 50, 218, 1);
        svg, h6 { color: rgba(88, 50, 218, 1) ; }
    }
    &.active {
        border-bottom: 2px solid rgba(88, 50, 218, 1);
        svg, h6 { color: rgba(88, 50, 218, 1) ; }

    }
    
`;

export const TableCustomStyle = styled.div`
.MuiDataGrid-root {
border-radius: 16px;
padding: 0 12px;
border: 1px solid rgba(18, 53, 91, 0.1);
}

/* TOOLBAR */
.MuiDataGrid-toolbarContainer{
    display: flex;
    justify-content: flex-end !important;
    width: 100%;
    margin-left: auto;
    button{
        height: 40px;
        width: 120px;
        border-radius: 16px;
        padding: 12px 24px;
        margin: 10px 10px;
        color: rgba(88, 50, 218, 1);
        /* border: 1px solid rgba(88, 50, 218, 0.2); */
        background-color: rgba(88, 50, 218, 0.15);
        font-family: 'Maison Neue';
    }
}
/* THE SORTING BUTTONS */
.MuiDataGrid-iconButtonContainer{ 
    button {
    width: 30px;
    height: 30px;
    margin: 0px 0px 0 25px !important;
    background-color: rgba(88, 50, 218, 0.2);
    visibility: visible;
    svg { 
        color: rgba(88, 50, 218, 1); 
        opacity: 1;

    }
    :hover {
        background-color: #5832DA;
        svg { color: #fff; }
    }
    }
}

/* THE 3 DOTS */
.MuiDataGrid-root .MuiDataGrid-menuIcon {
    margin-right: -10px;
    width: 20px;
    visibility: visible;
    button { 
        background-color: transparent !important;
        margin: 0 !important;
        width: 20px;
        svg { color: rgba(18, 53, 91, 0.5);}

        :hover { 
            svg { color: #5832DA;}

        }
    }

}
/* ROWS */
.MuiDataGrid-root .MuiDataGrid-row{
    :hover {
        background-color: rgba(88, 50, 218, 0.1);
    }

}
.MuiDataGrid-root .MuiDataGrid-row.Mui-selected{
        background-color: rgba(88, 50, 218, 0.1);
        color: rgba(88, 50, 218, 1);
}
/* CELLS */
.MuiDataGrid-root .MuiDataGrid-cell:focus{
    outline: none;
}

.MuiDataGrid-footerContainer {
    height: 50px;
}

p { margin-bottom: 0px !important; }
.MuiTablePagination-root{
    width: 100%;
    margin: 0  10px 0 0px;
}
.MuiToolbar-root-MuiTablePagination-toolbar{
    width: 100%;
    margin-left: -50px;
    padding-right: 0px;
}

.MuiTablePagination-actions {
    display: flex;
    height: 100%;
    button {
        margin: 0 ;
        height: 80%;
    }
}
    /* p.pending, svg { color: #12355B; } */
.status_bar {
    /* width: 80%;
    height: 80%;
    margin: 10%; */

}
    .status_bar.active {
        background-color: rgba(125, 191, 16, 0.1);
        color: rgba(125, 191, 16, 1);
    }
    .status_bar.banned {
        background-color: rgba(255, 12, 62, 0.1);
        color: rgba(255, 12, 62, 1);     
    }

`;