import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <main>
      <section>
        <h2>Background</h2>
        <h3>Mission Ready</h3>
        <p>
          I completed the 12 week Full Stack Developer Accelerator, where Create
          responsive web applications using HTML, CSS, JavaScript and React.js
          Develop server-side software using node.js, Working with databases
          using SQL.
        </p>
        <h3>AUT</h3>
        <p>
          I recently graduated with a Bachelors of Creative Technologies from
          Auckland University of Technology. This is what pushed me to pursue
          web development.
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <p>HTML, CSS, Reactjs, Nodejs, SQL, Github, REST APIs</p>
      </section>
      <section>
        <h2>Projects</h2>
        <article>myToDoList</article>
        <p>
          A todo app created using Reactjs, features include adding task title,
          description, complete by date, choosing color, complete and remove
          tasks
        </p>
      </section>
    </main>
  );
}
