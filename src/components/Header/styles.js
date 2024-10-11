import styled from "styled-components";

export const Container = styled.header`
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 123px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > div:nth-child(2) {
        width: 581px;
        padding: 16px 100px;
    }

    > button {
        min-width: 216px;

        display: flex;
        align-items: center;
        gap: 8px;

        margin: 0 32px;
        padding: 12px 32px;
    }

    > svg {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`;


export const Logo = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 43px;

    cursor: pointer;

    > img {
        width: 30px;
        height: 30px;
    }

    .logo-wrapper {
        position: relative;
        text-align: end;

        > h2 {
            font-size: 24px;
            font-weight: 700;
        }

        > span {
            position: absolute;
            top: 25px;
            right: 0;

            font-size: 12px;
            font-weight: 400;

         color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }
`;