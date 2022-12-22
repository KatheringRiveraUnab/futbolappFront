import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const URI = 'http://localhost:8000/api/user'

export const CompSignUpUser = () =>{
    const[name, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()

    var store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{name: name, email: email, password: password})
        navigate('/')
    }

    return(
        <div className='login-form'>
            <Card>
                <Card.Body>
                    <div className='titulo'>
                        <h1>Registro</h1>
                    </div>
                    <Form onSubmit={store}> 
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre y Apellidos</Form.Label>
                            <Form.Control
                                type="text"
                                value = {name}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder='Ingrese su Nombre'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                        <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email"
                                value = {email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Ingrese su Email'
                            />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                            <Form.Control className='mb-3'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Ingrese una contraseña'
                            />
                        </Form.Group>
                        <Card.Text> 
                            ¡Ya tienes una cuenta! &nbsp;
                            <Card.Link href="/">Iniciar Sesión</Card.Link>
                        </Card.Text>
                        <Button variant="outline-primary" type='submit'> Guardar </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CompSignUpUser;