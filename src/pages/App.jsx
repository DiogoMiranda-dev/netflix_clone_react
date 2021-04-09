import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from '../service/Tmdb';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieRow from '../components/MoveiRow';

export default () => {
  //Usando um state
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque
      let originals = list.filter((i) => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {/* header */}
      {/* Destaque */}
      {FeaturedData && <FeaturedMovie item={FeaturedData} />}

      {/* Listas */}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {/* Footer */}
    </div>
  );
};
