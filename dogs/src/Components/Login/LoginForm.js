import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button'
import { useForm } from '../../Hooks/useForm';

export const LoginForm = () => {
    const username = useForm()
    const password = useForm()

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }).
            then((response) => {
            console.log(response);
            return response.json();
        }).
            then((json) => {
            console.log(json)
        });
    }
  return (
    <section>
        <h1>Login</h1>
        <form action='' onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Password" type="password" name="password" {...password}/>
            <Button>Entrar</Button>
        </form>

        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;