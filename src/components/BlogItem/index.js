import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props

  return (
    <li className="blog-item">
      <div className="blog-item-heder">
        <p className="post-title">{title}</p>
        <p className="post-time">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}

export default BlogItem
