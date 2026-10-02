import React from "react";
import { team } from "../content";
import volker from "../utils/volker.png";
import mailynn from "../utils/mailynn.png";

const photos = { volker, mailynn };

function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Our Team</p>
          <h2>Big Four training. Personal service.</h2>
        </div>

        <div className="grid grid--2">
          {team.map((person) => (
            <article className="card person" key={person.name}>
              <div className="person__header">
                <div className="person__photo">
                  <img src={photos[person.photo]} alt={person.name} />
                </div>
                <div>
                  <h3>{person.name}</h3>
                  <p className="person__creds">{person.credentials}</p>
                </div>
              </div>
              <p>{person.bio}</p>
              <div className="person__contact">
                <a href={`mailto:${person.email}`}>{person.email}</a>
                <a href={person.phoneHref}>{person.phone}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
