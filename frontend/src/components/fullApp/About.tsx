import styled from "styled-components"

const DivAbout = styled.div`
  text-align: left;
  max-width: 800px;
  margin: auto;
`

export default function About() {
  return (
    <DivAbout className="about">
      <h1>About</h1>
      <p>
        <i>
          A <strong>found poem</strong> is a poem that is composed with words
          and phrases from another text.
        </i>
      </p>

      <section>
        <p>
          It may seem limiting to choose words only from a prearranged set, but
          limitations are one of the best drives of creativity.
        </p>
        <p>
          For the sake of this website there are a set of very specific
          constraints on each poem.
        </p>
        <ul>
          <li>You will recieve exactly 40 lines of text</li>
          <li>
            You may select any words or letters from this text to create your
            poem
          </li>
          <li>You cannot rearrange them</li>
        </ul>
        <p>
          The poems are meant to be a fun exercise not a throughout masterpiece,
          so don't spend too much time on each one. Churn out a few and discover
          moments of accidental brilliance and insight, or simply silliness.
          Take the stress and pressure out of writing and just have fun!
        </p>
        <h4>Contact</h4>
        <p>We would love to hear from you!</p>
        <p>Direct any comments or questions to poemistnet@gmail.com.</p>
      </section>
    </DivAbout>
  )
}
