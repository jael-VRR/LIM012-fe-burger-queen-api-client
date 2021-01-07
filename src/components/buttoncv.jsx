
import React from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/btn.css';


const Btn = () => {
    return (
        <div className ="btn">
            <Button>
               <a  href="https://drive.google.com/file/d/11azypBy1lPKw4ZzdWhGc793nOVDDImy2/view?usp=sharing" download="cv-jael-rr">Download CV</a>
            </Button>
        </div>
    );
}

export default Btn;