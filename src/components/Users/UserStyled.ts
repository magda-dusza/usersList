import styled from '@emotion/styled';

export const SearchInput = styled.input`
    margin: 10px 30px;
    width: 20em;
    border: 1px solid silver;
    padding: 4px 8px;
`

export const UserTable = styled.table`
    margin: 30px;
    align-items: center;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40em;
    margin: 0 auto;    
`

export const UserStyed = styled.tr`
    & td {
        border-bottom:1px solid silver;
        text-align: left;
        padding: 8px 16px;
    }
    & td:nth-of-type(odd) {
        color:silver;
    }

    & td:nth-of-type(2) {
        width: 100%;
    }
`