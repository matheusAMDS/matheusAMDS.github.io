import React, { useState } from "react";
import { Link } from "react-router-dom"

import "./styles.css";

export default function Header() {
  const [ search, setSearch ] = useState("");

  return (
    <header>
      <Link to="/"><div id="title">
        <h1>Udemy Free Courses</h1>
        <p>You don't like to spend money, so let's just cut to the chase!</p>
      </div></Link>
      
      <nav>
        <form id="search" onSubmit={(event) => event.preventDefault()}>
          <input 
            type="text" 
            id="search-bar"
            placeholder="Search for anything"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Link to={`courses/search/${search}`}><button type="submit"></button></Link>
        </form>
      </nav>
    </header>
  )
};