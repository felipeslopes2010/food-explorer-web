import styled from "styled-components";

export const Container = styled.div`
    > span {
        display: flex;
        align-items: center;
        
        margin: 24px 0px 42px 122px;

        font-family: 'Popins', serif;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
            width: 32px;
            height: 32px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`;

export const Main = styled.div`

`;

export const Description = styled.div`

`;

export const Tags = styled.div`

`;