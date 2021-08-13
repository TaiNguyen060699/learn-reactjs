import {useEffect , useState} from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";

const Tag = () => {
  const[tag, setTag] = useState([])

  useEffect(() => {
    fetch('https://conduit.productionready.io/api/tags',{
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      setTag(response.tags)
    })
    .catch(error => console.log(error))
  }, [setTag])
  return (
    <Router>
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {tag.map((item, key) => {
            return (<Link to="" className="tag-default tag-pill" key={key}>‌{item}</Link>)
          })}
        </div>
      </div>
    </Router>
  )
}

export default Tag
