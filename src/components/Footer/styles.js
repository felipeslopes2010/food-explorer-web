import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 123px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        font-size: 14px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
 

    > img {
       
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        font-size: 24px;
        font-weight: 700;
    }
`;