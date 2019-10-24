import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "../../services/api";

import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Footer from "../../components/Footer";

export default function Home() {
  const courses = {
    "Development": useState([]),
    "IT & Software": useState([]),
    "Business": useState([]),
    "Design": useState([]),
    "Marketing": useState([]),
  };

  const coursesKeys = Object.keys(courses);

  useEffect(() => {
    async function loadCourses(category, setCategory) {
      const resp = await api.get("/courses", {
        params: {
          category,
          page: 1,
          page_size: 5,
          price: "price-free",
          ordering: "relevance",
          "fields[course]": "title,avg_rating,image_200_H"
        }
      });

      setCategory(resp.data.results);
      console.log(resp.data.results)
    }

    coursesKeys.map(courseKey => loadCourses(courseKey, courses[courseKey][1]));
  }, []);

  return (
    <>
    <Header/>
    <main>
      {
      coursesKeys.map(courseKey => (
        <section key={courseKey} className="category-section">
          <h3>{courseKey} Courses</h3>
          <ul>
          {
          courses[courseKey][0].map(course => (
            <li key={course.id} className="course">
              <a href={`https://udemy.com/${course.id}`} target="_blank" rel="noopener noreferrer">
                <img src={course.image_200_H} alt=""/>
                <p className="title">{course.title}</p>
                <div className="ratings">
                  <Rating rating={course.avg_rating}/>
                </div>
              </a>
            </li>
          ))
          }
          </ul>
        </section>
        ))
      }
    </main>
    <Footer/>
    </>
  )
}