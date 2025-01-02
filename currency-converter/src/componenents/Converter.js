import React, { useState } from 'react';
import Result from './Result';

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [conversionType, setConversionType] = useState('LKRtoUSD');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRates = {
    LKRtoUSD: 1 / 295,
    USDtoLKR: 295,
  };

  const handleConvert = () => {
    const rate = exchangeRates[conversionType];
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="converter">
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div>
        <button onClick={() => setConversionType('LKRtoUSD')}>Convert LKR to USD</button>
        <button onClick={() => setConversionType('USDtoLKR')}>Convert USD to LKR</button>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <Result convertedAmount={convertedAmount} />
    </div>
  );
};

export default Converter;
