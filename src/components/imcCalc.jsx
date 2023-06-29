import { useState } from 'react';
import './imcCalc.css';
import Button from './Button';

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const clearForm = (e) => {
        e.preventDefault();

        setHeight('');
        setWeight('');
    }

    const validDigits = (text) =>{
       return text.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue);
    };

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    };

  return (
    <div className='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className='form-inputs'>
                <div className='form-control'>
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" placeholder="Exemplo 1,76" 
                    onChange={(e) => handleHeightChange(e)}
                    value={height}
                    />

                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" placeholder="Exemplo 90" 
                    onChange={(e) => handleWeightChange(e)}
                    value={weight}
                    />
                </div>
                
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc