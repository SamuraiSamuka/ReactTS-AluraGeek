import './Login.css'
import Formulario from '../Formulario';
import CampoInput from '../CampoInput';
import Botao from '../Botao';
import {useState} from 'react';
import {Form, Link} from 'react-router-dom';

const Login = ({aoLogar}) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function aoSubmeter(evento) {
        evento.preventDefault()
        let resposta = aoLogar({email: email, senha: senha})
        alert(resposta)
    }

    function mostrarEsconderSenha(evento) {
        let icone = evento.target
        let campoInput = icone.previousSibling
        if (campoInput.type === "password") {
            campoInput.type = "text"
            icone.style.color = "#606060"
        } else if (campoInput.type === "text") {
            campoInput.type = "password"
            icone.style.color = "#aaaaaa"
        }
    }

    return (
        <div className='formulario-container container'>
            <Formulario titulo="Iniciar Sessão"
                onsubmit={aoSubmeter}>
                <Form method='post'>
                    <CampoInput type="email"
                        aoAlterado={
                            evento => {
                                setEmail(evento.target.value)
                            }
                        }
                        valor={email}
                        required>E-mail</CampoInput>
                    <CampoInput type="password" icone="visibility"
                        comportamentoIcone={mostrarEsconderSenha}
                        aoAlterado={
                            evento => {
                                setSenha(evento.target.value)
                            }
                        }
                        valor={senha}
                        minimo={6}
                        required>Senha</CampoInput>
                    <Botao>Entrar</Botao>
                </Form>
                <div className='login-links'>
                    <Link to="/cadastrousuario" className='login-link'>Criar conta</Link>
                    <Link to="/recuperarsenha" className='login-link'>Esqueci minha senha</Link>
                </div>
            </Formulario>
        </div>
    )
}

export default Login
