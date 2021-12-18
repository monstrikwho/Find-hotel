import React from "react";
import { connect } from "react-redux";

import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { handleChangePrice } from "../../actions";

function PriceGroup({ price, handleChangePrice }) {
  const [input1, input2] = price.input;

  const valueLabelFormat = (value) => value * 1000;
  const handleChange = (e, value) => handleChangePrice("slider", value);

  return (
    <React.Fragment>
      <div className="box">
        <div className="title">Цена</div>
        <div className="group">
          <TextField
            value={input1}
            onChange={(e) => {
              handleChangePrice("over", e.target.value.replace(/\W+|\D+/g, ""));
            }}
            variant="outlined"
            placeholder="0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">от</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">P</InputAdornment>,
            }}
          />
          <TextField
            value={input2}
            onChange={(e) => {
              handleChangePrice(
                "under",
                e.target.value.replace(/\W+|\D+/g, "")
              );
            }}
            variant="outlined"
            placeholder="100 000"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">до</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">P</InputAdornment>,
            }}
          />
        </div>
      </div>

      <Slider
        value={price.slider}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { price: state.filterState.price };
};
const mapDispatchToProps = { handleChangePrice };

export default connect(mapStateToProps, mapDispatchToProps)(PriceGroup);
