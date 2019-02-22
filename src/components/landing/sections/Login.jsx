import React from 'react'
import '../styles.css'
import { Input, Icon, Form, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom'

const Login = ({user}) => {
  return (
    <div className="hero-image">
        <div className="hero-text">
            <img src="/img/white-logo.png" alt="scoutlink-logo"/>
            <p style={{margin:"2rem 0"}}>
                ¿Buscas talento? ¡Lo ponemos a tu alcance! <br/> ¿Tienes talento? ¡Muéstrale a todo el mundo tu talento!

            </p>
            <button>Conoce tu lugar en nuestra red</button>
        </div>
        <div className="hero-text-box">
            <div className="white-bg">
                <h4>INICIAR SESIÓN</h4>
                <form>
                    <Form.Item
                        style={{textAlign:'left'}}
                        label='Correo electrónico'
                    >
                        <Input 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder='lionel@messi.com' 
                            value={user}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{textAlign:'left'}}
                        label='Contraseña'
                    >
                        <Input 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            type="password" 
                            placeholder="******" 
                            value={user}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox className='login-form-remember'>Recordarme</Checkbox>
                        <Link className="login-form-forgot" to="/forgot-password">Olvidé mi contraseña</Link>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                </form>
            </div>
            <div className="black-bg">
                <p>¿Aún no tienes una cuenta en ScoutLink?</p>
                <Link to="/signup">¡Únete a ScoutLink Hoy!</Link>
            </div>
        </div>
    </div>
  )
}

export default Login
