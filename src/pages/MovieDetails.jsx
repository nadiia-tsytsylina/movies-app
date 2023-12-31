import { lazy } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'services/fetchAPI';
import { BsArrowLeft } from 'react-icons/bs';
import Loader from 'components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
const MovieInfo = lazy(() => import('../components/MovieInfo/MovieInfo'));
const AdditionalInfo = lazy(() =>
  import('../components/AdditionalInfo/AdditionalInfo')
);

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto' }}>
      <BackLink to={backLinkRef.current}>
        <BsArrowLeft />
      </BackLink>
      {movie && <MovieInfo movie={movie} />}

      {movie && <AdditionalInfo />}
      {isLoading && <Loader />}
    </div>
  );
};

export default MovieDetails;
