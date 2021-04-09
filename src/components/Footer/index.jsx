import React from 'react';
import './Footer.css';
export default () => {
  return (
      <footer>
          Feito com <span role="img" aria-label="coração" className="footer-emoji-heart" >❤</span> por <a href="http://diogomiranda.dev.br/" target="__blank">Diogo Miranda</a><br />
          Direitos de imagem para <a href="https://www.netflix.com" target="__blank">netflix.com</a> <br />
          Dados extraídos de <a href="https://www.themoviedb.org/" target="__blank">themoviedb.org</a>
      </footer>
  );
};
