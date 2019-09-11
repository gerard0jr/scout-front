import React from 'react'
import { Select, Input, DatePicker, Table, Radio } from 'antd';
import './styles.css'
import RadioGroup from 'antd/lib/radio/group';

const { TextArea } = Input
const { Option } = Select

const PlayerForm = ({handleChange, team, league, gamePosition, 
  alternativeGamePosition, gameProfile, sportsLifeSummary, level, nui, agent, 
  gameStatus, contractTeam, contractExpires, achievements}) => {
  return (
    <div className="general-form">
      <div className="group-inputs">
        <div className="input">
            <p>Nivel del jugador</p>
            <Select defaultValue="Amateur" onChange={handleChange('level')}>
              <Option value="Amateur">Amateur</Option>
              <Option value="Profesional">Profesional</Option>
            </Select>
        </div>
        {level !== 'Profesional' ?
        <>
          <div className="input">
            <p>Equipo</p>
            <Input 
              onChange={handleChange()}
              value={team} 
              placeholder="Pumas"
              name="team"
            />
          </div> 
          <div className="input">
            <p>Liga</p>
            <Input 
              onChange={handleChange()}
              value={league} 
              placeholder="Liga MX"
              name="league"
            />
          </div> 
        </>
          : 
        <>
          <div className="input">
            <p>NUI o Cárdex</p>
            <Input 
              onChange={handleChange()}
              value={nui} 
              placeholder="Introduce tu identificación"
              name="nui"
            />
          </div> 
          <div className="input">
            <p>Tiene representante</p>
            <Select defaultValue="No" onChange={handleChange('agent')}>
              <Option value="Sí">Sí</Option>
              <Option value="No">No</Option>
            </Select>
          </div> 
        </>
        }
      </div>
      {level === 'Profesional' ? 
        <>
        <div className="group-inputs">
          <div className="input">
            <p>Estatus</p>
            <Select defaultValue="Primero" onChange={handleChange('gameStatus')}>
              <Option value="Primero">Primero</Option>
              <Option value="Segundo">Segundo</Option>
            </Select>
          </div>
          <div className="input">
            <p>Equipo del contrato</p>
            <Input 
            onChange={handleChange()}
            value={contractTeam} 
            placeholder="Pumas"
            name="contractTeam"
            />
          </div>
          <div className="input">
            <p>Vencimiento del contrato</p>
            <DatePicker name="contractExpires" placeholder="Fecha" 
              locale="es" onChange={handleChange('contractExpires')} />
          </div>
        </div>
        </> : ''
      }
      <div className="group-inputs">
        <div className="input">
          <p>Posición de juego</p>
          <Select defaultValue="Delantero" onChange={handleChange('gamePosition')}>
            <Option value="Delantero">Delantero</Option>
            <Option value="Medio Campo">Medio Campo</Option>
            <Option value="Defensa">Defensa</Option>
            <Option value="Portero">Portero</Option>
          </Select>
        </div>
        <div className="input">
          <p>Posición alternativa</p>
          <Select defaultValue="Defensa" onChange={handleChange('alternativeGamePosition')}>
            <Option value="Delantero">Delantero</Option>
            <Option value="Medio Campo">Medio Campo</Option>
            <Option value="Defensa">Defensa</Option>
            <Option value="Portero">Portero</Option>
          </Select>
        </div>
        <div className="input">
          <p>Perfil</p>
          <Input 
          onChange={handleChange()}
          value={gameProfile} 
          placeholder="Introduce tu perfil"
          name="gameProfile"
          />
        </div>
      </div>
      <div className="group-inputs">
        <div style={{width:'100%'}}>
          <p>Resumen de tu vida deportiva</p>
          <TextArea style={{width:'80%'}} placeholder="Comencé a jugar en el equipo..." name="sportsLifeSummary" 
            onChange={handleChange()} value={sportsLifeSummary}  autosize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </div>
      <div className="group-inputs" style={{flexDirection:"column", alignItems:"center"}}>
        <p>Califique cómo siente en cada una de las siguientes cualidades</p>
        <Table pagination={false} dataSource={dataSource} columns={columns} />
      </div>
      <div className="group-inputs">
        <div style={{width:'100%'}}>
          <p>Logros (Enlista tus logros separándolos con un guión "-")</p>
          <TextArea style={{width:'80%'}} placeholder="Liga-Copa México-..." name="achievements" 
            onChange={handleChange()} value={achievements}  autosize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </div>
      <div className="group-inputs">
        <div className="input">
          <p>Equipo de preferencia</p>
          <Select defaultValue="Pumas" onChange={handleChange('preferredTeam')}>
            <Option value="Pumas">Pumas</Option>
            <Option value="América">América</Option>
            <Option value="Atlas">Atlas</Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

const columns = [{
  title: 'Cualidad',
  dataIndex: 'quality',
  key: 'quality',
}, {
  title: 'Excelente',
  dataIndex: 'excellent',
  key: 'excellent',
}, {
  title: 'Bueno',
  dataIndex: 'good',
  key: 'good',
}, {
  title: 'Ni bueno ni malo',
  dataIndex: 'normal',
  key: 'normal',
}, {
  title: 'Me cuesta trabajo',
  dataIndex: 'notGood',
  key: 'notGood',
}, {
  title: 'Tengo que desarrollar esta actividad',
  dataIndex: 'bad',
  key: 'bad',
}]

const dataSource = [{
  key: '1',
  quality: 'Velocidad',
  options: <RadioGroup><Radio /></RadioGroup>,
}];

export default PlayerForm
