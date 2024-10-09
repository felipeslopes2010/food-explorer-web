import styled from "styled-components";

export const Container = styled.span`
    padding: 4px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
`;