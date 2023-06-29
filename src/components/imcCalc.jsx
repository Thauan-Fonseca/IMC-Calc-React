import './imcCalc.css'

const ImcCalc = () => {
  return (
    <div className='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className='form-inputs'>
                <div className='form-control'>
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" placeholder="Exemplo 1,76" />
                </div>
                <div>
                <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" placeholder="Exemplo 90" />
                </div>
            </div>
            <div className="action-control">
                <button>Calcular</button>
                <button>Limpar</button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc