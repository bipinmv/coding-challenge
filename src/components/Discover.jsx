import { useCallback, useState } from "react";
import Search from "./Search";
import { movies } from "../config/data.json";
import ImageCard from "./ImageCard";

const Discover = () => {
  const [data] = useState(movies);
  const [filteredData, setFilteredData] = useState(movies);

  const handleSearchChange = useCallback(
    inputStr => {
      const filteredData = data.filter(obj => obj.Title.toLowerCase().includes(inputStr.toLowerCase()));
      if (inputStr === "") {
        setFilteredData(data);
      } else {
        setFilteredData(filteredData);
      }
    },
    [data]
  );

  return (
    <div className="discover">
      <Search onChange={handleSearchChange} classNames="mb-3 ms-3" />
      {filteredData.length > 0 ? (
        <div className="image-grid">
          {filteredData.map(obj => (
            <ImageCard
              key={obj.imdbID}
              imageSrc={obj.Poster}
              title={obj.Title}
              year={obj.Year}
              rating={obj.imdbRating}
              runTime={obj.Runtime}
              director={obj.Director}
              language={obj.Language}
              description={obj.Plot}
            />
          ))}
        </div>
      ) : (
        <div className="ms-3">No results found for your search</div>
      )}
    </div>
  );
};

export default Discover;
