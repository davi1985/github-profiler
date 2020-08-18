import React, { useState } from "react";
import './styles.css';


function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = `https://api.github.com/users/${search}`;
    fetch(url)
      .then(res => res.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <h1>Github profile</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" required value={search} onChange={handleChange} />
        </div>

        <button>Search</button>
      </form>

      {!userData && (
        <div className="github-user none">
          <p>Nenhum usuário encontrado. &#128531;</p>
        </div>
      )}

      {userData && (
        <div className="github-user">
          <img src={userData.avatar_url} alt="Github Brand" />
          <a href={userData.url}>{userData.name}</a>

          <div className="info">
            <p>{userData.location}</p>
            <p>
              <a href={userData.html_url} target="_new">{userData.html_url}</a></p>
          </div>
        </div>
      )}
    </div >
  );
}

export default App;
