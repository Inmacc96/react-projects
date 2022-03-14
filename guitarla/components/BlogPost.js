
const BlogPost = ({blogpost}) => {
    const {title, summary, image, published_at, id} = blogpost
  return (
    <article>
        <h1>{title}</h1>
    </article>
  )
}

export default BlogPost