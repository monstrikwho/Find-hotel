import { connect } from "react-redux";

import CheckboxGroup from "./CheckboxGroup";
import ReviewsGroup from "./ReviewsGroup";
import PriceGroup from "./PriceGroup";

import { handleClickAccept, handleClickClear } from "../../actions";

function Filters({ settings, filtered, handleClickAccept, handleClickClear }) {
  return (
    <div className="filters">
      <CheckboxGroup />
      <ReviewsGroup />
      <PriceGroup />

      <div className="actions">
        <div
          className={settings > 0 ? "btn accept" : "btn accept blocked"}
          onClick={handleClickAccept}
        >
          Применить фильтр
        </div>
        {filtered ? (
          <div className="btn clear" onClick={handleClickClear}>
            Очистить фильтр
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state.filterState.settings,
    filtered: state.filterState.filtered,
  };
};
const mapDispatchToProps = { handleClickAccept, handleClickClear };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
