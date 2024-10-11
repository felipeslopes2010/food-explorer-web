import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 172px;

    padding: 14px;
    border-radius: 8px;

    resize: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
    background: ${({ theme }) => theme.COLORS.DARK_800};

    &::placeholder { 
        color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
    }
`;