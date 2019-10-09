import React from 'react'
import { Input, DatePicker, Select } from 'antd';
import './styles.css'

const { TextArea } = Input
const { Option } = Select

const PersonalForm = ({handleChange, born, genre, height, weight, illness, academic, passport, 
  nationality, languages, personalDescription, tutorName, tutorLastPat, tutorLastMat, tutorBorn,
  tutorRel, tutorPhone, tutorEmail}) => {
  return (
    <div className="general-form">
      {/* NOMBRE */}
      <div className="group-inputs">
        {/* Nombre */}
        <div className="input">
          <p>Fecha de nacimiento</p>
          <DatePicker 
            onChange={handleChange()}
            name="born"
          />
        </div>
        <div className="input">
          <p>Sexo</p>
          <Select defaultValue="Masculino" onChange={handleChange('genre')}>
            <Option value="Masculino">Masculino</Option>
            <Option value="Femenino">Femenino</Option>
          </Select>
        </div>
        <div className="input">
          <p>Estatura</p>
          <Input 
            onChange={handleChange()}
            value={height} 
            placeholder="0.00"
            name="height"
            style={{width: 'auto'}}
          />
        </div> 
        <div className="input">
          <p>Peso</p>
          <Input 
            onChange={handleChange()}
            value={weight} 
            placeholder="0.00"
            name="weight"
            style={{width: 'auto'}}
          />
        </div> 
      </div>
      <div className="group-inputs">
        <div style={{width:'100%'}}>
          <p>Enfermedades o padecimientos (separe con un guión "-")</p>
          <TextArea style={{width:'80%'}} placeholder="Lista de enfermedades o padecimientos" name="illness" 
            onChange={handleChange()} value={illness}  autosize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </div>
      <div className="group-inputs">
        <div className="input">
          <p>Grado Académico</p>
          <Select defaultValue="Preparatoria" onChange={handleChange('academic')}>
            <Option value="Secundaria">Secundaria</Option>
            <Option value="Preparatoria">Preparatoria</Option>
            <Option value="Universidad">Universidad</Option>
          </Select>
        </div>
        <div className="input">
          <p>Pasaporte vigente</p>
          <Select defaultValue="Si" onChange={handleChange('passport')}>
            <Option value="Si">Si</Option>
            <Option value="No">No</Option>
          </Select>
        </div>
        <div className="input">
          <p>Nacionalidad</p>
          <Select defaultValue="Mexicano" onChange={handleChange('nationality')}>
            <Option value="Mexicano">Mexicano</Option>
            <Option value="Norteamericano">Norteamericano</Option>
            <Option value="Canadiense">Canadiense</Option>
            <Option value="Latinoamericano">Latinoamericano</Option>
          </Select>
        </div>
      </div>
      <div className="group-inputs">
        <div style={{width:'100%'}}>
          <p>Idiomas</p>
          <TextArea style={{width:'80%'}} placeholder="Lista de idiomas que domines" name="languages" 
            onChange={handleChange()} value={languages}  autosize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </div>
      <div className="group-inputs">
        <div style={{width:'100%'}}>
          <p>Descripción personal</p>
          <TextArea style={{width:'80%'}} placeholder="Cuéntanos algo de tí" name="personalDescription" 
            onChange={handleChange()} value={personalDescription}  autosize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </div>
      <h2>INFORMACIÓN DEL TUTOR LEGAL</h2>
      <div className="group-inputs">
        <div className="input">
          <p>Nombre(s)</p>
          <Input 
            onChange={handleChange()}
            value={tutorName} 
            placeholder="Nombre(s)"
            name="tutorName"
          />
        </div>
        <div className="input">
          <p>Apellido Paterno</p>
          <Input 
            onChange={handleChange()}
            value={tutorLastPat} 
            placeholder="Apellido Paterno"
            name="tutorLastPat"
          />
        </div>
        <div className="input">
          <p>Apellido Materno</p>
          <Input 
            onChange={handleChange()}
            value={tutorLastMat} 
            placeholder="Apellido Materno"
            name="tutorLastMat"
          />
        </div>
      </div>
      <div className="group-inputs">
        <div className="input">
          <p>Fecha de nacimiento</p>
          <DatePicker 
            onChange={handleChange()}
            name="tutorBorn"
          />
        </div>
        <div className="input">
          <p>Parentezco</p>
          <Input 
            onChange={handleChange()}
            value={tutorRel} 
            placeholder="Ej: Padre, hermano"
            name="tutorRel"
          />
        </div>
        <div className="input">
          <p>Teléfono</p>
          <Input 
            onChange={handleChange()}
            value={tutorPhone} 
            placeholder="55-1234-1234"
            name="tutorPhone"
          />
        </div>
      </div>
      <div className="group-inputs">
        <div className="input">
          <p>Correo electrónico</p>
          <Input 
            onChange={handleChange()}
            value={tutorEmail} 
            placeholder="ejemplo@correo.com"
            name="tutorEmail"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalForm
