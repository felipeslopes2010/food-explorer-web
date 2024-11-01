import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 8px;

    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

    text-align: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;

    ${({ isnew, theme }) => 
            isnew && `background-color: transparent; border: 1px dashed ${theme.COLORS.LIGHT_500};`
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        border: none;
        background: none;

        > svg {
            width: 16px;
            height: 16px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            cursor: pointer;
        }
    }

    > input {
        max-width: 100px;
        background: transparent;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
