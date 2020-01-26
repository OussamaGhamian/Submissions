import React from "react";

import conf from "../img/conference.jpeg";
import join from "../img/joinTeam.jpeg";

export default function News(props) {
  return (
    <main>
      <div class="news">
        <div id="top">
          <section>
            <h3>HE conference</h3>
            <article>
              Establishing the first HE conference in the MENA, organized by the
              Lebanese ministry of education
            </article>
          </section>
          <img src={conf} alt="news" />
        </div>
        <div>
          <section>
            <h3>HE conference</h3>
            <article>
              Establishing the first HE conference in the MENA, organized by the
              Lebanese ministry of education
            </article>
          </section>
          <img src={join} alt="news" />
        </div>
        <div>
          <section>
            <h3>HE conference</h3>
            <article>
              Establishing the first HE conference in the MENA, organized by the
              Lebanese ministry of education
            </article>
          </section>
          <img src={conf} alt="news" />
        </div>
        <div>
          <section>
            <h3>HE conference</h3>
            <article>Establishing the first HE conference in the MENA</article>
          </section>
          <img src={conf} alt="news" />
        </div>
        <div>
          <section>
            <h3>HE conference</h3>
            <article>Establishing the first HE conference in the MENA</article>
          </section>
          <img src={join} alt="news" />
        </div>
        <div>
          <section>
            <h3>HE conference</h3>
            <article>
              Establishing the first HE conference in the MENA, organized by the
              Lebanese ministry of education
            </article>
          </section>
          <img src={conf} alt="news" />
        </div>
      </div>
    </main>
  );
}
