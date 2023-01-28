import React, { useEffect } from 'react'
import Movie from './movieNow'

import { getAllMovie } from '../../../../redux/actions/movieActions';
import {useSelector, useDispatch} from 'react-redux'
import {memo} from 'react'

function MovieNow() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)
  useEffect(() => {
    dispatch(getAllMovie())
  }, [dispatch])
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="2000" className="grid grid-cols-3 gap-5 justify-items-center mt-10">
        {
          movies.map(movie => (
            <Movie key={movie._id} movie={movie}/>
          ))
        }
    </div>  
    </>
  );
}

export default memo(MovieNow);
