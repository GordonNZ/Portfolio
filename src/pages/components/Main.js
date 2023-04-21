import React from 'react';
import './Main.css';
//npm i react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCogs,
  FaFileCode,
} from 'react-icons/fa';

export default function Main() {
  return (
    <main>
      <section>
        <div className='mainHeaders'>
          <div className='mainH2Line'></div>
          <h2 className='mainH2'>Background</h2>
        </div>
        <div className='articleFlex'>
          <article>
            <h3 className='mainH3'>Mission Ready</h3>
            <p>
              I completed the 12-week Full Stack Developer Accelerator, which
              equipped me with skills in developing responsive full stack web
              applications. <br /> This includes many small projects using HTML,
              CSS, JavaScript and React.js in the front, Node.js and Express.js
              in the back and SQL databases.
            </p>
          </article>
          <article>
            <h3 className='mainH3'>Auckland University of Technology</h3>
            <p>
              I recently graduated with a Bachelors of Creative Technologies
              from AUT. This is what pushed me to pursue web development as a
              career through Mission Ready.
            </p>
          </article>
        </div>
      </section>
      <section>
        <h2 className='mainH2'>Tools</h2>
        <div className='mainGrid'>
          <div className='mainGridItem'>
            <FaHtml5 />
            <h4 className='mainH4'>HTML</h4>
          </div>
          <div className='mainGridItem'>
            <FaCss3Alt />
            <h4 className='mainH4'>CSS</h4>
          </div>
          <div className='mainGridItem'>
            <FaReact />
            <h4 className='mainH4'>React.js</h4>
          </div>
          <div className='mainGridItem'>
            <FaNodeJs />
            <h4 className='mainH4'>Node.js</h4>
          </div>
          <div className='mainGridItem'>
            <FaFileCode />
            <h4 className='mainH4'>SQL</h4>
          </div>
          <div className='mainGridItem'>
            <FaGithub />
            <h4 className='mainH4'>GitHub</h4>
          </div>
          <div className='mainGridItem'>
            <FaCogs />
            <h4 className='mainH4'>REST APIs</h4>
          </div>
        </div>
      </section>
      <section>
        <h2 className='mainH2'>Projects</h2>
        <article>
          <img src='' alt='colourful todo web app'></img>
          <h3 className='mainH3'>myToDoList</h3>
          <p>Frontend Project</p>
          <a href='https://github.com/GordonNZ/todolistbygordon' target='blank'>
            Github
          </a>

          <p>
            A todo app I built using react hooks with React.js. Key
            functionalities include the ability to add task title, description,
            completion deadline, colour selection, as well as the capability to
            mark tasks as complete or remove them entirely.
          </p>
        </article>
        <article>
          <img src='' alt='MissionX LevelUp Works Website'></img>
          <h3 className='mainH3'>'LevelUp Works' (Mission Ready)</h3>
          <p>Fullstack Project</p>
          <p>Github repo is privated</p>
          <p>
            As part of my 12-week Full Stack Developer Accelerator at Mission
            Ready, I contributed to a collaborative team of four in the
            development of a functional website, according to the provided
            design brief.
            <br />
            <br />
            My responsibilities included the development of two web pages,
            encompassing both front-end development using React.js and back-end
            development using Node.js and Express.js. The database was
            constructed utilizing MySQL Workbench.
          </p>
        </article>
      </section>
    </main>
  );
}
