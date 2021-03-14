import React,{useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

import {useDispatch,useSelector} from 'react-redux'
import AuthAction from '../Auth/AuthActions'
const LogIn = () => {

    const Auth = useSelector(state => state.Auth)
    const {user} = Auth
    console.log(user);

    const dispatch = useDispatch()
    
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    
    
    
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AuthAction(form))
        history.push('/')
        console.log(form);
    }
    
    return ( 
        <div className='login'>
           
           <Form className='bootform'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit} className='submitform' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
     );
}
 
export default LogIn;