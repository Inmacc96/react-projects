import BlogPost from "./BlogPost";
import styles from "../styles/Blog.module.css";

const BlogList = ({ blogposts }) => {
  return (
    <>
      <h1 className="heading">Blog</h1>
      <div className={styles.blog}>
        {blogposts.map((blogpost) => (
          <BlogPost key={blogpost.id} blogpost={blogpost} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
