import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  // const { data: blog, error} = useFetch('http://localhost:8000/blogs/' + id);
  const { data: blog, error} = useFetch('  https://viyuss9w6e.execute-api.us-east-1.amazonaws.com/dev' + id);
  const history = useHistory();
  
  // const handleClick = () => {
  //   fetch('http://localhost:8000/blogs/' + blog.id, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     history.push('/');
  //   }) 
  // }
  const handleClick = () => {
    fetch('  https://viyuss9w6e.execute-api.us-east-1.amazonaws.com/dev' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Scris de { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Sterge</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;