import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { Container } from "./styles";

export function IngredientsItem({ isnew, value, onClick, ...rest }) {
    return (
        <Container isnew={isnew}>
            <input
                type="text"
                value={value}
                readOnly={!isnew}
                {...rest}
                />

            <button
                type="button"
                onClick={onClick}
            >
                {isnew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    );
}
