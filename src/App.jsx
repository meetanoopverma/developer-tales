import React, { Component, useState } from "react";

const App = () => {
  const frameworks = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: " Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Vite",
      url: "https://redux.js.org/",
      author: "Dan Abramov",
      num_comments: 3,
      points: 4,
      objectID: 2,
    },
    {
      title: "Svelte",
      url: "https://redux.js.org/",
      author: "Swelte Developer",
      num_comments: 4,
      points: 5,
      objectID: 3,
    },
    {
      title: "Ember",
      url: "https://redux.js.org/",
      author: "Ember Developer",
      num_comments: 2,
      points: 5,
      objectID: 4,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const searchedFrameworks = frameworks.filter((framework) =>
    framework.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <ul>
        <List list={searchedFrameworks} />
      </ul>
    </div>
  );
};

const Search = (props) => {
  // Using Object destructuring syntax below:
  const { search, onSearch } = props;
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  );
};

const List = (props) => {
  const searchedList = Array.from(props.list);
  return (
    <div>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </div>
  );
};

function Item(props) {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

export default App;
