// src/components/TypingAnimation.js
import React, { useState, useEffect } from 'react';
// import './TypingAnimation.css';

const WriteLetters = () => {

  const words = ['python', 'javascript']
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const typeNextLetter = () => {
      const currentLength = currentWord.length;
      const targetWord = words[currentIndex];

      if (!deleting && currentLength < targetWord.length) {
        setCurrentWord(targetWord.substring(0, currentLength + 1));
        timeoutId = setTimeout(typeNextLetter, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
      } else if (deleting && currentLength > 0) {
        setCurrentWord(targetWord.substring(0, currentLength - 1));
        timeoutId = setTimeout(typeNextLetter, 50); // Ajuste a velocidade da exclusão aqui (em milissegundos)
      } else {
        setDeleting(!deleting);

        if (!deleting) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }

        timeoutId = setTimeout(typeNextLetter, 1000); // Tempo de espera antes de começar a próxima palavra
      }
    };

    typeNextLetter();

    return () => clearTimeout(timeoutId);
  }, [currentWord, currentIndex, deleting, words]);

  return (
    <div className="typing-animation">
      {currentWord}
    </div>
  );
};

export default WriteLetters;
