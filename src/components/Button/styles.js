import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    padding: 12px 32px;
    border-radius: 5px;

    border: none;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
`;