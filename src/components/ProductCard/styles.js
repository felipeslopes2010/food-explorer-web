import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-width: 304px;
    height: 462px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 23px;
    padding: 24px;
    gap: 15px;
    border-radius: 8px;

    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    background-color: ${({theme}) => theme.COLORS.DARK_200};

    cursor: pointer;

    > svg {
       position: absolute;
        top: 16px;
        right: 18px;

        width: 24px;
        height: 22px;

        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > img {
        width: 176px;
        height: 176px;
    }

    > h3 {
        text-align: center;
        font-family: "Poppins", serif;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > p {
        height: 34px;
        
        font-size: 14px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > span {
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 16px;

    .quantity-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 14px;

        > button {
            width: 24px;
            height: 24px;

            font-size: 24px;

            background: transparent;
            border: none;

            > svg {
                font-size: 24px;
                color: ${({theme}) => theme.COLORS.LIGHT_100};
            }
        }

        > span {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 20px;
            font-weight: 700;
        }
    }

    > button {
        padding: 12px 24px;
    }
`;