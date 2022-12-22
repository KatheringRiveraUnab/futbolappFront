import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//aca inicia
export const Login = () => {
    const [body, setBody] = useState({ email: '', password: '' })
    const navigate  = useNavigate()
   // const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }
    //********** */
    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    
                    "Access-Control-Allow-Origin": "*",
                }
            };
            const URI = 'http://localhost:8000/api/login/'
            
        const resp = await axios.post(URI, body, axiosConfig );
    let s = JSON.stringify(resp?.data);
    console.log ("este es mi Token arr ",s);
  
        let union1 = s.split(":")[2];
        
        let r = union1.substring(1, union1.length-3);
            console.log('Este es el JWT:',r);
            localStorage.setItem('auth',r);
            navigate('/')
            window.location = '/'
        }
        catch(error) {
            navigate('/SignIn')
            window.location = '/SignIn'
            console.log(error)
            console.log("Paso por abajo")
        }
    }
 
//************* */
    return (
        <div className="login-form">
            <Card className='card1'>
                <Card.Body>
                    <div className='titulo'>
                        <h1>Inicio de Sesión</h1>
                    </div>
                    <Form >
                        <Form.Group>
                            <Form.Control className='mb-3'
                                type= "email"
                                placeholder = "Correo"
                                value= {body.email}
                                onChange={inputChange}
                                name= "correo"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className='mb-3'
                                type="password"
                                placeholder = "Password"
                                value={body.password}
                                onChange={inputChange}
                                name="password"
                            />
                        </Form.Group>
                        <Button onClick={onSubmit} type='submit' >
                            Login
                        </Button>
                        <Link to="/SignUp" >Registrar</Link>
                    </Form>
                </Card.Body>
            </Card>
        </div> 
    )
}

export default Login;