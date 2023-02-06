import { memo, useCallback, useState, useRef, useMemo } from "react";
import ICON_SEARCH from "../assets/images/search.svg";
import ICON_CLEAR from "../assets/images/clear.svg";

const Search = ({ onChange, classNames }) => {
  const [expanded, setExpanded] = useState(false);
  const inputElement = useRef();

  const onSearch = useCallback(
    event => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const onClose = useCallback(() => {
    onChange("");
    inputElement.current.value = "";
    setExpanded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchWidth = useMemo(
    () => ({
      width: expanded ? "42%" : "2rem",
      transition: "width 1.5s, background-color 0.5s",
    }),
    [expanded]
  );

  return (
    <div
      className={`search-box-container ${classNames} ${expanded ? "expanded-search" : ""}`}
      style={searchWidth}
    >
      <img
        src={ICON_SEARCH}
        alt=""
        className="ms-3 u-cursor-pointer"
        width="20"
        onClick={() => setExpanded(true)}
      />
      {expanded && (
        <>
          <input
            type="text"
            className="form-control u-no-border search-box search-input opacity-animation"
            placeholder="Title, Movies, Keyword"
            ref={inputElement}
            onChange={onSearch}
          />
          <img src={ICON_CLEAR} alt="" className="me-3 u-cursor-pointer opacity-animation" width="18" onClick={onClose} />
        </>
      )}
    </div>
  );
};

export default memo(Search);
