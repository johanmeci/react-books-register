import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View() {

  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>
  }

  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover? <img src={item?.cover} width="400" alt={item?.title} /> : "" }</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed? 'Leído' : 'Por Terminar'}</div>
      <div>{item?.review}</div>
    </Layout>
  );
}