import {Container} from 'react-bootstrap'


const Footer =() =>{
    return(
        <Container fluid style={{backgroundColor: "#212529",color:'#fff'}}>
            <Container style={{display:'flex', justifyContent: 'center'}}>
                <p>Web blog</p>
            </Container>
        </Container>

    )
}

export default Footer