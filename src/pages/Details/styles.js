import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    > span {
        display: flex;
        align-items: center;
        
        margin: 32px 0px 42px 122px;

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    margin: 0px 120px 155px;

    gap: 48px;

    > img {
        width: 390px;
        height: 390px;
    }
`;

export const Description = styled.div`
    > h1 {
        font-family: Poppins;
        font-size: 40px;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p {
        margin: 24px 0px 24px;

        font-family: Poppins;
        font-size: 24px;
        font-weight: 400;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: ce;
    gap: 12px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 33px;

    margin-top: 48px;

    > button {
        padding: 12px 24px;
    }
`;

export const QuantitySelecter = styled.div`
    display: flex;
    align-items: center;

    gap: 14px;

    > svg {
        width: 24px;
        height: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        cursor: pointer;
    }

    > span {
        font-size: 20px;
        font-weight: 700;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`;