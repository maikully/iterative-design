import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { React, Grid, Item } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import FadeSection from './FadeSection'
import { Carousel, Fade } from 'react-bootstrap'
function Homework2 () {
  return (
    <>
      <div className='HW-header'>
        <FadeSection>
          <div style={{ marginTop: '10vh' }}>
            <br></br>
            <span>
              <h1>The Website</h1>
            </span>
          </div>
        </FadeSection>
        <gridbody style={{ marginTop: '10vh'}}>
          <div class='block block-block1'>
            <FadeSection>
              <div style={{ width: '30vw', textAlign: 'left' }}>
                <span>
                  <a style={{ fontSize: 'large', textAlign: 'left' }}>
                    For my responsive redesign, I chose the Piero Scaruffi
                    Knowledgebase website. I chose this website because it has
                    many flaws in its accessibility, and has the challenge of
                    displaying copious amounts of information without
                    overwhelming the user.
                  </a>
                </span>
                <br />
                <br />
                <div>
                  <a style={{ fontSize: 'large', textAlign: 'left' }}>
                    Click on the screenshot to visit the original website.
                  </a>
                </div>
              </div>
            </FadeSection>
          </div>
          <div class='block block-block2'>
            <FadeSection>
              <a target='_blank' href='https://www.scaruffi.com/'>
                <img
                  className='clickable'
                  src={require('./images/scaruffi.png')}
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
            </FadeSection>
          </div>
        </gridbody>
      </div>
      <div className='HW-header-two'>
        <FadeSection>
          <div style={{ marginBottom: '10vh' }}>
            <br></br>
            <span>
              <h1>Problems</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <ul style={{ width: '65vw', textAlign: 'left' }}>
              <h3>Usability</h3>
              <li>
                To get to some pages, including the more popular ones, one has
                to look through a wall of links, or navigate through a path of
                links of unknown length
              </li>
              <li>
                On the right side, a long list of the “latest” links is both
                unattractive and not useful
              </li>
              <li>
                The links at the top bar are redundant and inconsistent with the
                links below
              </li>
              <h3 style={{ marginTop: '10vh' }}>Learnability</h3>
              <li>
                Patterns exist in the website: album ratings are
                organized by artist, while other lists on the will rank
                musicians or simply list notable works chronologically
              </li>
              <li>
                Some inconsistencies in the links: for example, the “rock”
                header links to the same page as the “other genres” header, i.e.
                the main “music” page
              </li>
              <li>
                The wall of text makes it harder for a user to learn all of the
                website's navigations
              </li>
              <h3 style={{ marginTop: '10vh' }}>Memorability</h3>
              <li>The flow of the website can be inconsistent and confusing</li>
              <li>
                The sheer amount of links presented at the beginning can
                overwhelm users, hurting the website’s memorability.
              </li>
              <h3 style={{ marginTop: '10vh' }}>Conceptual Model</h3>
              <li>
                Links often lead to
                other links, which, for music, end at an artist’s page
                containing the album ratings at the top and written reviews
                below
              </li>
              <li>
                Other pages will rank artists or artworks, or simply list things chronologically
              </li>
            </ul>
          </div>
        </FadeSection>
        <FadeSection>
          <h1 style={{ marginTop: '10vh', marginBottom: '10vh' }}>
            Accessibility
          </h1>
          <p
            style={{
              width: '50vw',
              fontSize: 20,
              marginBottom: '10vh',
              textAlign: 'left'
            }}
          >
            WebAIM WAVE notices missing alternative text, missing form labels, a
            lack of heading labels, and that the document is missing a language.
            These issues are less noticeable: most of them aren’t front-facing,
            and the page does seem to have headers. However, it also notices
            redundant links, very small text, and suspicious link text. Visiting
            all of these errors, it’s apparent how they can lower the page’s
            overall accessibility.
          </p>
        </FadeSection>
      </div>
      <div className='HW-header-three'>
        <FadeSection>
          <div style={{ marginBottom: '10vh' }}>
            <br></br>
            <span>
              <h1>Low-Fidelity Wireframing</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <br></br>
            <span>
              <img
                src={require('./images/scaruffi_wireframe_1.png')}
                style={{ width: '40%', height: '40%', marginBottom: '10vh' }}
              />
            </span>
          </div>
          <div>
            <span>
              <img
                src={require('./images/scaruffi_wireframe_2.png')}
                style={{ width: '20%', height: '20%', marginBottom: '10vh', marginRight: '5vw' }}
              />
            </span>
            <span>
              <img
                src={require('./images/scaruffi_wireframe_3.png')}
                style={{ width: '10%', height: '10%', marginBottom: '10vh' }}
              />
            </span>
          </div>
        </FadeSection>
      </div>
      <div className='HW-header-four'>
        <FadeSection>
          <div style={{ marginBottom: '10vh' }}>
            <br></br>
            <span>
              <h1>High-Fidelity Prototyping</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <span>
              <h2 style={{ marginBottom: '10vh' }}>Visual Design Guide</h2>
            </span>
            <span>
              <img
                src={require('./images/design_guide.png')}
                style={{ width: '30%', height: '30%', marginBottom: '10vh' }}
              />
            </span>
          </div>
        </FadeSection>
        <div>
          <FadeSection>
            <span>
              <h2 style={{ marginBottom: '10vh' }}>Figma Prototypes</h2>
            </span>
          </FadeSection>
          <FadeSection>
            <div>
              <a
                target='_blank'
                href='https://www.figma.com/proto/5PDOhEEUXnUI1CIq5qLyRx/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=345%2C531%2C0.37&scaling=scale-down'
              >
                <img
                  src={require('./images/figma_1.jpg')}
                  style={{ width: '40%', height: '40%', marginBottom: '10vh' }}
                />
              </a>
            </div>
            <div>
              <img
                src={require('./images/figma_2.jpg')}
                style={{ width: '20%', height: '20%', marginBottom: '10vh', marginRight:"5vw" }}
              />
              <img
                src={require('./images/figma_3.jpg')}
                style={{ width: '10%', height: '10%', marginBottom: '10vh' }}
              />
            </div>
          </FadeSection>
        </div>
        <FadeSection>
          <div>
            <br></br>
            <span>
              <h1>Redesign</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div
            style={{
              width: '50vw',
              fontSize: 20,
              marginTop: '10vh',
              marginBottom: '10vh'
            }}
          >
            <p style={{ marginBottom: '10vh' }}>
              Click on the preview to check out my redesign!
            </p>
            <a target='_blank' href='redesign.html'>
              <img
                src={require('./images/redesign_preview.png')}
                style={{ width: '100%', height: '100%', marginBottom: '10vh' }}
              />
            </a>
          </div>
        </FadeSection>
      </div>
    </>
  )
}

export default Homework2
