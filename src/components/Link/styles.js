import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: fit-content;

    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    cursor: pointer;
`;