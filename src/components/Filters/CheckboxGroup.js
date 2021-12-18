import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { handleChangeCheckbox } from "../../actions";

const starsName = {
  1: "1 звезда",
  2: "2 звезды",
  3: "3 звезды",
  4: "4 звезды",
  5: "5 звезд",
};

function CheckboxGroup({ stars, handleChangeCheckbox }) {
  const [toggle, setToggle] = useState(false);

  const activeStars = [];
  Object.entries(stars).map((item) => {
    if (item[1]) {
      activeStars.push(+item[0]);
    }
  });

  useEffect(() => {
    const placeholder = document.querySelector("#stars .placeholder");
    const items = document.querySelector("#stars .items");
    if (activeStars.length === 0) {
      items.style.display = "none";
      placeholder.style.display = "block";
    } else {
      items.style.display = "flex";
      placeholder.style.display = "none";
    }
  }, [activeStars]);

  const handleClickStars = () => {
    const ul = document.querySelector("ul");

    if (toggle) {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }

    setToggle(!toggle);
  };

  const CheckboxItem = ({ value, index }) => {
    const status = stars[index + 1];
    return (
      <li
        onClick={() => {
          handleChangeCheckbox(index + 1);
        }}
      >
        <Checkbox checked={status} /> {value}
      </li>
    );
  };

  return (
    <div className="box">
      <div className="title">Количество звезд</div>
      <div id="stars" onClick={handleClickStars}>
        <div className="placeholder">Нажмите, для выбора звезд</div>

        <div className="items">
          {activeStars.map((item, i) => (
            <div className="star" key={i}>
              {starsName[item]}
            </div>
          ))}
        </div>

        <div className="arrow">
          {toggle ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      <ul>
        {["1 звезда", "2 звезды", "3 звезды", "4 звезды", "5 звезд"].map(
          (item, i) => (
            <CheckboxItem value={item} index={i} key={i} />
          )
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stars: state.filterState.stars,
  };
};
const mapDispatchToProps = { handleChangeCheckbox };

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);
