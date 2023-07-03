import { Container } from "react-bootstrap";
import s from './Jumbotron.module.css'

const Jumbotron = () => {
  return (
    <div className={s.jumbo}>
      <div  className={s.overlay} >
      <Container style={{marginTop: '5%'}} >
        <h1 className="h1">Web blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Container>
      </div>
    </div>
  );
};

export default Jumbotron;
