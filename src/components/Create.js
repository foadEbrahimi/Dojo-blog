import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('foad');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  console.log(history);
  function HandlerSubmit(e) {
    e.preventDefault();
    console.log('submit');
    const newBlog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setTimeout(() => {
        setIsPending(false);
        console.log('new blog add');
        history.push('/');
      }, 2000);
    });
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={HandlerSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          {/* <option value="miad">miad</option> */}
          <option value="foad">foad</option>
        </select>
        <button>{isPending ? 'Adding Blog... ' : 'Add Blog'}</button>
      </form>
    </div>
  );
};

export default Create;
