import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');

  const getWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.currentTarget.value));
  };

  const getHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.currentTarget.value));
  };

  const calculateBmi = () => {
    let resultBmi = weight / Math.pow(height / 100, 2);
    setBmi(resultBmi);
    setResponse(resultBmi);
  };

  const reloadBmi = () => {
    setHeight(0);
    setWeight(0);
    setBmi(0);
    setImage('');
    setStatus('');
  }

  const setResponse = (bmi: number) => {
    if (bmi < 18.5) {
      setImage('/assets/underweight.png');
      setStatus('underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setImage('/assets/healthy.png');
      setStatus('healthy');
    } else {
      setImage('/assets/overweight.png');
      setStatus('overweight');
    }
  };

  return (
    <div className='Container'>
      <div className='Card'>
        <h2>BMI Calculator</h2>
        <div className='Input-Card'>
          <label>Berat(kg)</label>
          <input
            value={String(weight)}
            type={'number'}
            onChange={getWeight}
            style={{ height: '24px', marginTop: '3px' }}
          />
          <label style={{ marginTop: '10px' }}>Tinggi(cm)</label>
          <input
            value={String(height)}
            type={'number'}
            onChange={getHeight}
            style={{ height: '24px', marginTop: '3px' }}
          />
          <button
            style={{
              marginTop: '10px',
              height: '30px',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '5px'
            }}
            onClick={calculateBmi}
          >
            Submit
          </button>
          <button
            style={{
              marginTop: '5px',
              height: '30px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '5px'
            }}
            onClick={reloadBmi}
          >
            Reload
          </button>
        </div>
        {bmi !== 0 && <h3>Your BMI is: {bmi.toFixed(2)}</h3>}
        {status !== '' && <span>You are {status}</span>}
        {image !== '' && <img src={image} alt='gambar' height={'200'} width={'100'} />}
      </div>
    </div>
  );
}

export default App;
