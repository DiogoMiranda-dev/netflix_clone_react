import React from 'react';
import './FeaturedMovie.css';

export default ({ item }) => {
  // pegando o ano do movie
  let firstDate = new Date(item.first_air_date);

  //Pegando os generos
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  //Limitando a descrição a 200 caracteres
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured--description">{description}</div>
          </div>
          <div className="featured--buttons">
            <a className="featured--button--watch" href={`/watch/${item.id}`}>
              ► Assistir
            </a>
            <a className="featured--button--mylist" href={`/add/${item.id}`}>
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};
