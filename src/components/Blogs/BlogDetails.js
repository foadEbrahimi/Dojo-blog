import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../../hooks/useFetch';

const BlogDetails = () => {
  const { id: idParam } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${idParam}`);
  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Write by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
