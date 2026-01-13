import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", body: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setPosts(res.data.slice(0, 5));
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleSubmit = async () => {
    if (!form.title || !form.body) {
      alert("All fields are required");
      return;
    }

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, {
          ...form,
          userId: 1,
        });
      } else {
        await axios.post(API_URL, {
          ...form,
          userId: 1,
        });
      }

      setForm({ title: "", body: "" });
      setEditId(null);
      fetchPosts();
    } catch (err) {
      setError("Operation failed");
    }
  };
  const deletePost = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchPosts();
    } catch (err) {
      setError("Delete failed");
    }
  };
  const editPost = (post) => {
    setForm({ title: post.title, body: post.body });
    setEditId(post.id);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>CRUD App (Machine Coding)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {/* FORM */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />

      <input
        placeholder="Body"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <br />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <hr />

      {/* LIST */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
            <br />
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
