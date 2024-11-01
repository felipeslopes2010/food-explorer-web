import { Container } from "./styles";

export function Input({ icon: Icon, children, ...rest }) {
    return (
        <Container>
            {children}
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}
