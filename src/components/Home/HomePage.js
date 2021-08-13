import Feed from "./Feed";
import Tag from "./Tag";

import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <Link to="" className="nav-link active">Global Feed</Link>
              </li>
            </ul>
            <Feed />
          </div>
        </div>
        <div className="col-md-3">
          <Tag />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage
