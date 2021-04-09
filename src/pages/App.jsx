import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from '../service/Tmdb';
import Header from '../components/Header';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieRow from '../components/MoveiRow';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default () => {
  //Usando um state
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <div className="page">
      {/* header */}
      <Header black={blackHeader} />

      {/* Destaque */}
      {FeaturedData && <FeaturedMovie item={FeaturedData} />}

      {/* Listas movie */}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      {/* Footer */}
      <Footer />

      {/* Loading */}
      {movieList.length <= 0 && <Loading />}
    </div>
  );
};
