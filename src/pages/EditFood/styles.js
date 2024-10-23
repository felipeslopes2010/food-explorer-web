import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
   
    flex: 1;
    padding: 0px 124px 116px;

    > a {
        display: flex;
        align-items: center;

        margin: 32px 0px 24px;

        font-family: 'Poppins', serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
        > svg {
            width: 32px;
            height: 32px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > h1 {
        font-family: 'Poppins', serif;
        font-size: 32px;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 32px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap; 
    align-items: flex-start;
    gap: 32px;

    > div:nth-of-type(1) {
        width: 20%;
    }

    > div:nth-of-type(2) {
       width: 40%;
    }

    > div:nth-of-type(3) {
        flex: 1;
    }

    > div:nth-of-type(4) {
        width: 75%;
    }

    > div:nth-of-type(5) {
        flex: 1;
    }

    > div:nth-of-type(6) {
        width: 100%;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    > label {
        margin-bottom: 16px;
    }

    > div {
        background: ${({ theme }) => theme.COLORS.DARK_800};
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;
    justify-content: end;

    > button {
        width: 172px;
        padding: 12px 24px;
    }

    > button:first-of-type {
        background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    > button:last-of-type {
        background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`;