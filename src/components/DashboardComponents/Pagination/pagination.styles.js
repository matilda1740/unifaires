import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
    width: 100%;
    height: 3rem;
    margin: 1rem 0 ;
    display: flex;
    align-items: center;
    justify-content: center;

    --main-bg-color: #5832DA;

    .pagination-pill {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        padding: 0.5rem;
        margin: 0 0.75rem;
        transition: all 0.3s ease;
        svg {
            font-size: 1rem;
        }
        ::marker {
            background-color: transparent;
        }
        &.outlined{
            background-color: rgba(88, 50, 218, 0.1);
            color: #5832DA;
            /* border: 0.5px solid #5832DA; */
        }
        &.selected, :hover {
            background-color: var(--main-bg-color);
            color: #eee;
            cursor: pointer;
        }
        &.disabled {
            pointer-events: none;
            background-color: transparent;
            *{color: transparent;}
            :hover{ cursor: not-allowed;}
        }
    }
`;