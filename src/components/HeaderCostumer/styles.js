import styled from "styled-components";

export const Container = styled.header`
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 123px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > div:nth-child(2) {
        width: 581px;
        padding: 16px 100px;
    }

    > button {
        display: flex;
        align-items: center;
        gap: 8px;

        margin: 0 32px;
        padding: 12px 46.5px;
    }

    > svg {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`;


export const Logo = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 43px;

    cursor: pointer;

    > img {
        width: 30px;
        height: 30px;
    }

    > h2 {
        font-size: 24px;
        font-weight: 700;
    }
`;