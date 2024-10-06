import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 8px;
    
    > input {
        width: 100%;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background-color: transparent;
        border: none;
        padding: 12px 14px;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

`;