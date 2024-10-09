import { Container } from "./styles"

export function Link({ icon: Icon, title }) { 
    return (
        <Container>
            {Icon && <Icon />} 
            {title}
        </Container>
    )
}
