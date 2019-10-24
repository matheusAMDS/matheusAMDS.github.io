import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Footer from "../../components/Footer";

export default function SearchResults() {
  const { q } = useParams();
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    async function loadResults() {
      const resp = await api.get("/courses/", {
        params: {
          page: 1,
          search: q,
          price: "price-free",
          ordering: "relevance",
          "fields[course]": "title,avg_rating,image_200_H,headline"
        }
      });

      setResults(resp.data.results);
    }

    loadResults();
  }, [q])

  return (
    <>
    <Header/>
    <main>
      {results.map(course => (
        <a href={`https://udemy.com/${course.id}`}>
          <div key={course.id} className="course-results">
            <img src={course.image_200_H} alt="" />
            <div className="description">
              <p className="title">{course.title}</p>
              <p className="headline">{course.headline}</p>
            </div>
            <div className="ratings">
              <Rating rating={course.avg_rating}/>
            </div>
          </div>
        </a>
      ))}
    </main>
    <Footer/>
    </>
  )
}