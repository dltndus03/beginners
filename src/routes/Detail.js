import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams(); //url에 있는 값을 반환해주는 함수(:id)
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} alt="" />
          <div>
            {movie.year}년 개봉 | 좋아요: {movie.like_count} | 별점:
            {movie.rating}
          </div>
          <div>내용 : {movie.description_full}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
