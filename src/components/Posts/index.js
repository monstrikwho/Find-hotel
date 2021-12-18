import { connect } from "react-redux";

import Post from "./Post";
import IMG from "../../images/Group.png";

import { handleClickClear } from "../../actions";

function Posts({ posts, handleClickClear }) {
  if (posts.length !== 0) {
    return (
      <div className="posts">
        {posts.map((item) => (
          <Post data={item} key={item.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="post" style={{ textAlign: "center" }}>
        <img src={IMG} alt="img" />
        <div
          className="title"
          style={{ maxWidth: "240px", margin: "0 auto", marginTop: "36px" }}
        >
          По данным параметрам ничего не найдено
        </div>
        <div className="subtitle">
          Попробуйте изменить параметры фильтрации или вернуться в общий каталог
        </div>
        <div className="actions">
          <div className="btn" onClick={handleClickClear}>
            Очистить фильтр
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.filterState.posts,
  };
};
const mapDispatchToProps = { handleClickClear };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
