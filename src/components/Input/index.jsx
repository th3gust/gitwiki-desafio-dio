import { Container } from "./styles";

const Input = ({value, onChange}) => {
    return(
        <Container
            value = {value}
            onChange = {onChange}
        >
            <input/>
        </Container>
    )
}

export default Input