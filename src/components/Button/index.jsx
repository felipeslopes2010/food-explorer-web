import { Container } from "./styles";

export function Button({icon: Icon, children, title, ...props }) {
    return (
        <Container {...props} >
          {Icon && <Icon size={20} />}
            {title}
            {children}
        </Container>
    )
}