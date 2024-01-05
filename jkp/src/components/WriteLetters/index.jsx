import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [textDisplay, setTextDisplay] = useState('');
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deletando, setDeletando] = useState(false);
  const [final, setFinal] = useState(false);

  const listaFrases = ['Mobile Legends: Bang Bang.', 'Call of Duty: Mobile.', 'Investimentos e Finanças.'];

  const loop = () => {
    if (i < listaFrases.length) {
      const frase = listaFrases[i];
      setFinal(false);

      if (!deletando && j < frase.length) {
        setTextDisplay((prevText) => prevText + frase[j]);
        setJ((prevJ) => prevJ + 1);
      }

      if (deletando && j <= frase.length) {
        setTextDisplay((prevText) => prevText.slice(0, -1));
        setJ((prevJ) => prevJ - 1);
      }

      if (j === frase.length) {
        setFinal(true);
        setDeletando(true);
      }

      if (deletando && j === 0) {
        setDeletando(false);
        setTextDisplay('');
        setI((prevI) => (prevI + 1 === listaFrases.length ? 0 : prevI + 1));
      }
    }

    // const speedUp = Math.random() * (80 - 50) + 50;
    // const normalSpeed = Math.random() * (300 - 200) + 200;

    // let time = final ? 2000 : deletando ? speedUp : normalSpeed;
    // let time = final ? 2000 : deletando ? speedUp : normalSpeed;
    setTimeout(loop, 4000);
  };

  useEffect(() => {
    loop();
  }, [i, j, deletando, final]); // Executar o loop quando as dependências mudarem

  return <div id="text">{textDisplay}</div>;
};

export default TypingAnimation;
