import { Container } from "./styles"

export function Link({ icon: Icon, title, ...rest }) { 
    return (
        <Container {...rest}>
            {Icon && <Icon />} 
            {title}
        </Container>
    )
}
