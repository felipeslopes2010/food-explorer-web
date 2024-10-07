import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 12px 14px;
    gap: 14px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 8px;
    
    > input {

        width: 100%;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background-color: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

`;