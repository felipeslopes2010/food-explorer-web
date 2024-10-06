import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 306px
`;

export const InputWrapper = styled.div`
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    > label {
        margin-bottom: 8px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

export const Logo = styled.div`
    display: flex;
    gap: 19px;

    > img {
        width: 49px;
        height: 47px;
    }

    > h1 {
        font-size: 42px;
        font-weight: 700;
        color: #FFF;
    }
`;

export const Form = styled.form`
    min-width: 476px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 16px;

    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 64px;

    > h2 {
        font-family: Poppins;
        font-size: 32px;
        font-weight: 500;
        line-height: 140%;

        text-align: center;

        margin-bottom: 32px;
    }
`;