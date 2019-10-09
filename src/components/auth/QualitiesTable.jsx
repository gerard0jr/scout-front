import React from 'react'
import './styles.css'

const QualitiesTable = ({handleChange}) => {
    return (
        <table className="tabla-cualidades">
            <thead>
                <tr>
                    <th>Cualidad</th>
                    <th>Excelente</th>
                    <th>Bueno</th>
                    <th>Ni bueno ni malo</th>
                    <th>Me cuesta trabajo</th>
                    <th>Tengo que desarrollar esta actividad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Velocidad</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="velocidad" id="vel-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="velocidad" id="vel-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="velocidad" id="vel-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="velocidad" id="vel-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="velocidad" id="vel-none"/></td>
                </tr>
                <tr>
                    <td>Agilidad</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="agilidad" id="agil-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="agilidad" id="agil-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="agilidad" id="agil-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="agilidad" id="agil-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="agilidad" id="agil-none"/></td>
                </tr>
                <tr>
                    <td>Fortaleza</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="fortaleza" id="for-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="fortaleza" id="for-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="fortaleza" id="for-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="fortaleza" id="for-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="fortaleza" id="for-none"/></td>
                </tr>
                <tr>
                    <td>Drible</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="drible" id="drib-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="drible" id="drib-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="drible" id="drib-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="drible" id="drib-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="drible" id="drib-none"/></td>
                </tr>
                <tr>
                    <td>Coordinación</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="coordinacion" id="coord-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="coordinacion" id="coord-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="coordinacion" id="coord-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="coordinacion" id="coord-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="coordinacion" id="coord-none"/></td>
                </tr>
                <tr>
                    <td>Elasticidad</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="elasticidad" id="elast-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="elasticidad" id="elast-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="elasticidad" id="elast-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="elasticidad" id="elast-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="elasticidad" id="elast-none"/></td>
                </tr>
                <tr>
                    <td>Resistencia</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="resistencia" id="res-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="resistencia" id="res-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="resistencia" id="res-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="resistencia" id="res-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="resistencia" id="res-none"/></td>
                </tr>
                <tr>
                    <td>Potencia de golpeo</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="potencia" id="pot-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="potencia" id="pot-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="potencia" id="pot-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="potencia" id="pot-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="potencia" id="pot-none"/></td>
                </tr>
                <tr>
                    <td>Pressing</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="pressing" id="press-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="pressing" id="press-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="pressing" id="press-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="pressing" id="press-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="pressing" id="press-none"/></td>
                </tr>
                <tr>
                    <td>Cobertura</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="cobertura" id="cob-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="cobertura" id="cob-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="cobertura" id="cob-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="cobertura" id="cob-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="cobertura" id="cob-none"/></td>
                </tr>
                <tr>
                    <td>Marcación</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="marcacion" id="marc-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="marcacion" id="marc-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="marcacion" id="marc-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="marcacion" id="marc-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="marcacion" id="marc-none"/></td>
                </tr>
                <tr>
                    <td>Achique</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="achique" id="ach-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="achique" id="ach-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="achique" id="ach-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="achique" id="ach-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="achique" id="ach-none"/></td>
                </tr>
                <tr>
                    <td>Anticipación</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="anticipacion" id="ant-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="anticipacion" id="ant-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="anticipacion" id="ant-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="anticipacion" id="ant-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="anticipacion" id="ant-none"/></td>
                </tr>
                <tr>
                    <td>Desmarque</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="desmarque" id="desm-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="desmarque" id="desm-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="desmarque" id="desm-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="desmarque" id="desm-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="desmarque" id="desm-none"/></td>
                </tr>
                <tr>
                    <td>Cabeceo</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="cabeceo" id="cab-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="cabeceo" id="cab-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="cabeceo" id="cab-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="cabeceo" id="cab-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="cabeceo" id="cab-none"/></td>
                </tr>
                <tr>
                    <td>Precisión en el pase</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="precision" id="prec-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="precision" id="prec-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="precision" id="prec-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="precision" id="prec-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="precision" id="prec-none"/></td>
                </tr>
                <tr>
                    <td>Conducción</td>
                    <td><input onChange={handleChange('radio')} type="radio" value="5" name="conduccion" id="cond-excellent"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="4" name="conduccion" id="cond-good"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="3" name="conduccion" id="cond-soso"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="2" name="conduccion" id="cond-hard"/></td>
                    <td><input onChange={handleChange('radio')} type="radio" value="1" name="conduccion" id="cond-none"/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default QualitiesTable
