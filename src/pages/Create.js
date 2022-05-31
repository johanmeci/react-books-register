import { useState } from "react";
import { useAppContext } from "../store/Store";

import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Create() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [intro, setIntro] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const store = useAppContext();

  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'title':
        setTitle(value);
      break;

      case 'author':
        setAuthor(value);
      break;

      case 'intro':
        setIntro(value);
      break;

      case 'completed':
        setCompleted(e.target.checked);
      break;

      case 'review':
        setReview(value);
      break;
    
      default:
        break;
    }
  }

  function handleChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    };

    //TODO: register book
    store.createItem(newBook);
    navigate('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input value={title} onChange={handleChange} name="title" type="text" />
        </div>

        <div>
          <div>Author</div>
          <input value={author} onChange={handleChange} name="author" type="text" />
        </div>

        <div>
          <div>Cover</div>
          <input onChange={handleChangeFile} name="cover" type="file" />
          <div>{!!cover ? <img src={cover} width="200" alt="preview" /> : ""}</div>
        </div>

        <div>
          <div>Introduction</div>
          <input value={intro} onChange={handleChange} name="intro" type="text" />
        </div>

        <div>
          <div>Completed</div>
          <input value={completed} onChange={handleChange} name="completed" type="checkbox" />
        </div>

        <div>
          <div>Review</div>
          <input value={review} onChange={handleChange} name="review" type="text" />
        </div>

        <input type="submit" value="Register book" />
      </form>
    </Layout>
  );
}