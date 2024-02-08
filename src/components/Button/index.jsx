import { Container } from "./styles";

const Button = ({onClick}) => {
    return(
        <Container
            onClick = {onClick}
        >
            Buscar
        </Container>
    )
}

export default Button