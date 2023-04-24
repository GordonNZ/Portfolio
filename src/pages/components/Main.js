import React, { useState } from 'react';
import './Main.css';
//npm i react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCogs,
  FaDatabase,
  FaJsSquare,
  FaArrowRight,
} from 'react-icons/fa';
import ImageSlider from './ImageSlider';
import { ToDoSlides } from './ToDoSlides';
import { MissionXSlides } from './MissionXSlides';

export default function Main() {
  // const ToDoSlides = [
  //   {
  //     url: '../../../assets/img/todoslides/todoslide1.png',
  //     title: 'todo slide 1',
  //   },
  //   {
  //     url: '../../assets/img/todoslides/todoslide2.png',
  //     title: 'todo slide 2',
  //   },
  //   {
  //     url: '../../assets/img/todoslides/todoslide3.png',
  //     title: 'todo slide 3',
  //   },
  //   {
  //     url: '../../assets/img/todoslides/todoslide4.png',
  //     title: 'todo slide 4',
  //   },
  //   {
  //     url: '../../assets/img/todoslides/todoslide5.png',
  //     title: 'todo slide 5',
  //   },
  //   {
  //     url: '../../assets/img/todoslides/todoslide6.png',
  //     title: 'todo slide 6',
  //   },
  // ];

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
              equipped me with skills in developing full stack responsive web
              applications. <br />
              This includes many small projects using HTML, CSS, JavaScript and
              React.js in the front, Node.js and Express.js in the back and SQL
              databases.
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
            <FaJsSquare />
            <h4 className='mainH4'>JavaScript</h4>
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
            <FaDatabase />
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
      <section className='mainProjectSection'>
        <h2 className='mainH2'>Projects</h2>
        <article className='mainProjectArticle'>
          <div className='projectSlideContainer'>
            <ImageSlider slides={ToDoSlides} />
          </div>
          <h3 className='mainH3'>myToDoList</h3>
          <div className='flex projectInfo'>
            <p>Frontend Project</p>
            <a
              href='https://github.com/GordonNZ/todolistbygordon'
              target='blank'
            >
              Github <FaArrowRight className='icons' />
            </a>
          </div>
          <p className='projectDesc'>
            A todo app I built using react hooks with React.js. Key
            functionalities include the ability to add task title, description,
            completion date, colour selection, as well as the capability to mark
            tasks as complete or remove them entirely.
          </p>
        </article>
        <article className='mainProjectArticle'>
          <div className='projectSlideContainer'>
            <ImageSlider slides={MissionXSlides} />
          </div>
          {/* <img src='' alt='MissionX LevelUp Works Website'></img> */}
          <h3 className='mainH3'>'LevelUp Works' (Mission Ready)</h3>
          <div className='flex projectInfo'>
            <p>Full stack Project</p>
            <p>Github repo is privated</p>
          </div>

          <p className='projectDesc'>
            For my final 'Mission' during my 12-week Full Stack Developer
            Accelerator, I contributed to a collaborative team of four in the
            development of a functional website, according to the provided
            design brief.
            <br />
            My responsibilities included the development of two web pages,
            encompassing both front-end development using axios get and post
            methods with React.js and back-end development using Node.js and
            Express.js. The database was constructed utilizing MySQL Workbench.
            <br />
            This also included regular communication with the team; reviewing
            our progress, what we needed to do, helping one another and regular
            code merging.
          </p>
        </article>
      </section>
    </main>
  );
}
