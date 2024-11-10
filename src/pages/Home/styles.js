import styled from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.main`
    padding: 196px 124px 48px;

    > h2 {
        font-family: "Poppins", serif;
        font-size: 32px;
        font-weight: 500;

        margin-top: 62px;

        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
`;

export const Banner = styled.div`
    height: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};

    .text-wrapper {
        text-align: end;
        white-space: nowrap;

        padding-right: 100px;

        > h1 {
            font-family: 'Poppins', serif;
            font-size: 40px;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            margin-bottom: 8px;
        }

        > p {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    }

    > img {
        margin-top: -146px;
        margin-left: -55px;
    }
`;

export const Products = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    overflow: hidden;


    gap: 27px;

    margin-top: 23px;

    > svg:first-child {
        position: absolute;
        z-index: 1;

        margin-left: 10px;

        width: 40px;
        height: 40px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > svg:last-child {
        position: absolute;
        z-index: 1;

        right: 15px;

        width: 40px;
        height: 40px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

`;