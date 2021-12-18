import { connect } from "react-redux";

import TextField from "@mui/material/TextField";

import { handleChangeReviews } from "../../actions";

function ReviewsGroup({ reviews, handleChangeReviews }) {
  return (
    <div className="box">
      <div className="title">Количество отзывов (от)</div>
      <TextField
        value={reviews}
        onChange={(e) => {
          handleChangeReviews(e.target.value);
        }}
        variant="outlined"
        placeholder="Например, от 10"
        // color="warning"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { reviews: state.filterState.reviews };
};
const mapDispatchToProps = { handleChangeReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsGroup);
