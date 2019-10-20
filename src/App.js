import React, { useState } from "react";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import { connect } from "react-redux";
import { getPosts } from "./actions";
import "./App.scss";

const tempArr = [
  {
    firstName: "Joe",
    lastName: "Bloggs",
    email: "jbloggs@gmail.com",
    age: 34,
    onlineStatus: true
  }
];

const App = ({ getPosts, posts }) => {
  const fetchPosts = () => {
    getPosts();
    handleUpdate();
  };
  const [hideBtn, setHideBtn] = useState(false);
  const handleUpdate = () => {
    setHideBtn(!hideBtn);
  };
  return (
    <div className="App" data-test="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click button to render posts."
          tempArr={tempArr}
        />
        {!hideBtn && (
          <Button
            data-test="btn"
            buttonText="Get Posts"
            emitEvent={fetchPosts}
          />
        )}
        {posts.length > 0 && (
          <div>
            {posts.map(post => (
              <ListItem key={post.id} title={post.title} desc={post.body} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(App);
