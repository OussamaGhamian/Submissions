import React from "react";

import hero from "../img/hero.jpeg";
import students from "../img/flat-people-going-university-collection.jpg";
import uniStdnt from "../img/group-people-reading-borrowing-books.jpg";
import workshop from "../img/workshops.jpg";
import grad from "../img/6.jpg";

export default function Main(props) {
  return (
    <main>
      <div id="hero">
        <img src={hero} alt="hero " />
      </div>
      <div id="intro">
        <article>
          EduME is a non-profit organization that aims to fund students that
          lack the financial ability throughout forming groups of 5 donors who
          will help until they reach the end of their education and get a job
        </article>
      </div>
      <h2>GUIDE</h2>
      <section>
        <article>
          We guide our students to choose the right major that fits them, we
          help them to discover their potential capabilities, ambitions, dreams
        </article>
        <img src={students} alt="" />
      </section>
      <h2>SUPPORT</h2>
      <section>
        <img src={uniStdnt} alt="" />
        <article>
          we support our students with the required skills to be successful in
          their educational trip as well as in their future professions
        </article>
      </section>
      <h2>Activities</h2>
      <section>
        <article>
          Involving our students not only in the university life, but
          encouraging them to be good members in their communities throughout
          participating in multi volunteering works
        </article>
        <img src={workshop} alt="" />
      </section>
      <h2>ACHIEVE</h2>
      <section>
        <img src={grad} alt=" " />
        <article>
          Finally!! our students are prepared with the needed skills to be
          beneficial assets for their communities
        </article>
      </section>
      <section>
        <input id="btn" type="button" value="Join Our Donors" />
        <input id="btn" type="button" value="Join Our Stdents" />
      </section>
    </main>
  );
}
