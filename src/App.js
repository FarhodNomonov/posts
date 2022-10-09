import axios from "axios";
import React from "react";
import { Search } from "./assets/icon/icon";
import PostList from "./components/postList";
import Button from "./components/ui/button/button";
import WrapperInput from "./components/ui/input/input";
import Loader from "./components/ui/loader/loader";
import Select from "./components/ui/select/select";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [newPost, setNewPost] = React.useState({ title: "", body: "" });
  const [selected, setSelected] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const AddNewPost = () => {
    setPosts([...posts, { ...newPost, id: new Date().getTime() }]);
    setNewPost({ title: "", description: "" });
  };

  const RemovePost = (post) => {
    setPosts(posts.filter((del) => del.id === post.id));
  };

  const sortSelect = (sort) => {
    setSelected(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort.target.value);
  };

  const getPostsFC = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const search = (e) => {
    if (e.target.value.length === 0) {
      getPostsFC();
    }
    if (e.target.value.length > 2) {
      setPosts(
        posts?.filter((item) =>
          item?.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  React.useEffect(() => {
    getPostsFC();
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      <form className="form">
        <WrapperInput
          value={newPost?.title}
          onChange={(e) => setNewPost({ ...posts, title: e.target.value })}
        />
        <WrapperInput
          value={newPost?.description}
          onChange={(e) =>
            setNewPost({ ...posts, description: e.target.value })
          }
        />
        <Button title="Create" onClick={AddNewPost} />
      </form>
      <div className="app_select">
        <Select
          value={selected}
          onChange={sortSelect}
          defaultValue="Sorting"
          option={[
            {
              value: "title",
              name: "By name",
            },
            {
              value: "body",
              name: "By description",
            },
          ]}
        />
        <label className="search_inp">
          <WrapperInput onChange={search} />
          <Search />
        </label>
      </div>

      <PostList posts={posts} remove={RemovePost} />
    </div>
  );
}

export default App;
