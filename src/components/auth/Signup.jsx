import React, { Component } from 'react'
import { Steps, Button, message } from 'antd'
import './styles.css'
import GeneralForm from './GeneralForm';
import PersonalForm from './PersonalForm';
import PlayerForm from './PlayerForm';
import TermsAndConditions from './TermsAndConditions';
import Footer from './Footer';

const { Step } = Steps

export default class Signup extends Component {
    
    state = {
        current: 0,
        player: {}
    }

    steps = [{
        title: 'General'
      }, {
        title: 'Jugador'
      }, {
        title: 'Personal'
      }, {
        title: 'Términos y condiciones'
      }]

    handleChange = e => value => {
        const { player } = this.state
        if(e === 'contractExpires'){player[e] = value._d; return this.setState({player})}
        if(typeof e === 'string'){player[e] = value; return this.setState({player})}
        // Estas líneas de abajo manejan a los inputs de puro texto
        player[value.target.name] = value.target.value
        this.setState({player}, ()=>console.log(player))
    }

    next = () => this.setState({current: this.state.current + 1})

    prev = () => this.setState({current: this.state.current - 1})

  render() {
      const { current, player } = this.state
      const { next, prev, steps, handleChange } = this
    return ( 
    <div> 
        <div className="logo">
            <img src="/img/logo.png" alt="logo"/>
        </div>
        <div className="header-2">
            <h2>Registro de jugador</h2>
        </div>
        <div className="steps">
            <Steps current={current}>
                {steps.map( item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">{
                current === 0 ? <GeneralForm {...player} handleChange={handleChange}/> : 
                current === 1 ? <PlayerForm {...player} handleChange={handleChange}/> :
                current === 2 ? <PersonalForm {...player} handleChange={handleChange}/> :
                current === 3 ? <TermsAndConditions /> : ''
            }</div>
            <div className="steps-action">
                {
                    current > 0
                    && <Button style={{ marginRight: 8 }} onClick={() => prev()}>Volver</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('¡Proceso completado!')}>Registrarme</Button>
                }
                {
                    current < steps.length -1 
                    && <Button type="primary" onClick={() => next()}>Continuar</Button>
                }
            </div>
        </div>  
        <Footer/>      
    </div>
    )}
}