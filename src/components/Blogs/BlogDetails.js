import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {
  const { id: idParam } = useParams();
  // console.log(idParam);
  return (
    <div className="blog-details">
      <h2>Blog details - {idParam}</h2>
    </div>
  );
};

export default BlogDetails;
