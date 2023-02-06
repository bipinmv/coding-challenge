const DetailView = ({ imageSrc, title, year, rating, runTime, director, language, description }) => (
  <div className="detail-view-container detail-view-slide">
    <img src={imageSrc} alt="" />
    <div className="detail">
      <h3>{title}</h3>
      <div className="d-flex flex-row align-items-center my-3">
        <div className="rating-progress-container me-3">
          <div style={{ width: `${rating * 10}%` }} className="rating-progress"></div>
        </div>
        <span>{`${rating}/10`}</span>
      </div>
      <div>
        <div className="d-flex">
          <span className="u-flex-15">{"Year:"}</span>
          <span className="u-flex-9">{year}</span>
        </div>
        <div className="d-flex my-2">
          <span className="u-flex-15">{"Running Time:"}</span>
          <span className="u-flex-9">{runTime}</span>
        </div>
        <div className="d-flex">
          <span className="u-flex-15">{"Directed by:"}</span>
          <span className="u-flex-9">{director}</span>
        </div>
        <div className="d-flex mt-2 mb-3">
          <span className="u-flex-15">{"Language:"}</span>
          <span className="u-flex-9">{language}</span>
        </div>
        <div className="mb-3">{description}</div>
        <button className="play-movie-btn me-3 mb-2">{"Play Movie"}</button>
        <button className="watch-trailer-btn">{"Watch Trailer"}</button>
      </div>
    </div>
  </div>
);

export default DetailView;
