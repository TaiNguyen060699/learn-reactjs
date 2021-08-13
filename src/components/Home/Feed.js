import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(Number)
  const [currentPage, setCurrentPage] = useState(1)

  const loadAPI = () => {
    let offset = (currentPage - 1) * 10
    fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=${offset}`)
      .then(res => res.json())
      .then(response => {
        setData(response.articles)
        setPage(response.articlesCount)
      }).catch(error => console.error(error))
  }

  const activeClass = (e) => setCurrentPage(e.target.dataset.id)

  useEffect(() => {
    loadAPI();
  }, [currentPage])

  return (
    <Router>
      <div> {
        data.map((item, key) => {
          return (
            <div className="article-preview"
              key={key}>
              <div className="article-meta">
                <Link className="" to="/">
                  <img src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="ssss" />
                </Link>
                <div className="info">
                  <Link className="author" to="/">
                    {
                      item.author.username
                    }</Link>
                  <span className="date">
                    {
                      item.createdAt
                    }</span>
                </div>
                <div className="pull-xs-right">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ion-heart"></i>
                  </button>
                </div>
              </div>
              <Link className="preview-link" to="#">
                <h1>{
                  item.title
                }</h1>
                <p>{
                  item.description
                }</p>
                <span>Read more...</span>
                <ul className="tag-list"></ul>
              </Link>
            </div>
          )
        })
      }
        <nav>
          <ul className="pagination">
            {Array.from({ length: page / 10 }, (_, indexx) =>
              <li className={`page-item ${currentPage == indexx + 1 ? 'active' : ''}`} onClick={(e) => activeClass(e)}>
                <Link className="page-link" to="" data-id={indexx + 1}>{indexx + 1}</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>`
    </Router>
  )
}

export default Feed
