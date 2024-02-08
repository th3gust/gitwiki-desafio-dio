import { Container, Remove, Show } from "./styles";

const Item = ({repositorie, onClick}) => {


    return(
        <Container>
            <h3>{repositorie.name}</h3>
            <p>{repositorie.full_name}</p>
            <Show href={repositorie.html_url} target="_blank">Show</Show>
            <Remove href="#" onClick = {onClick}>Remove</Remove>
            <hr/>
        </Container>
    )
}

export default Item