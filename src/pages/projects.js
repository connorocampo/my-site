import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import Layout from '../components/layout'

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects | Web Developer | Corinne Ling</title>
        <meta name="description" content="Front-end projects I've worked on that taught me more about web development." />
      </Helmet>
      <Layout page={'projects'}>
        {/* <div className="cmp-project__wrapper">
          <h1 className="cmp-project__title">Projects</h1>
          <p className="cmp-project__description">Some things that helped me learn more about web development</p>
        </div> */}
        <section className="cmp-project">
          <a className="cmp-project__link" href="https://github.com/corinneling/a11y-control-panel">
            <svg className="feather feather-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <h2>A11y Bookmarklet</h2>
          </a>
          <div className="cmp-project__info">
            <p>A minimalist control panel that allows users to change the aesthetics of a page to make it more accessible, such as increasing contrast or font size.</p>
          </div>
          <a className="cmp-project__link" href="https://codepen.io/corinneling/pen/MGoRN">
            <h2>Event Card</h2>
          </a>
          <div className="cmp-project__info">
            <p>A project prompt from the Full Stack Apprenticeship at Sparkbox. I worked with a designer to bring their mockup to life, while creating an accessible card with BEM naming conventions.</p>
          </div>
          <a className="cmp-project__link" href="https://github.com/corinneling/to-the-browser">
            <h2>Code Katas</h2>
          </a>
          <div className="cmp-project__info">
            <p>I completed these katas as an apprentice at Sparkbox then transformed them into programs that could perform in the browser, while maintaining test coverage.</p>
          </div>
          <a className="cmp-project__link" href="https://codepen.io/corinneling/pen/mLwKaG">
            <h2>Newsletter Sign Up</h2>
          </a>
          <div className="cmp-project__info">
            <p>A codepen I created based on a dribble design to practice the flow of animation through the process of a sign up form.</p>
          </div>
        </section>
      </Layout>
    </Fragment>
  )
}

export default Projects