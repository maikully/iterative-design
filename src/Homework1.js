import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { React, Grid, Item } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import FadeSection from './FadeSection'
import { Carousel, Fade } from 'react-bootstrap'

function Homework1 () {
  return (
    <>
      <div className='HW-header'>
        <FadeSection>
          <div style={{ marginTop: '100vh' }}>
            <br></br>
            <span>
              <h1>The Interface</h1>
            </span>
          </div>
        </FadeSection>
        <gridbody style={{ marginTop: '50vh', marginBottom: '100vh' }}>
          <div class='block block-block1'>
            <FadeSection>
              <div>
                <span>
                  {
                    <a style={{ fontSize: 'large', textAlign: 'left' }}>
                      The iPad at the IT Service Center is a public interface that runs a program that is
                      used to collect signatures from people loaning out
                      equipment, which is much easier managed digitally than physically. 
                      The program displays information about the rental and has a box
                      in which the user can sign, but the interface has some flaws.
                      Click on the image to try a demo!
                    </a>
                  }
                </span>
              </div>
            </FadeSection>
          </div>
          <div class='block block-block2'>
            <FadeSection>
              <Carousel interval={null} wrap={false}>
                <Carousel.Item>
                  <a
                    target='_blank'
                    href='https://www.figma.com/proto/pdoZMmsjPyeg3UyD4nclXl/Untitled?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1'
                  >
                    <img 
                      className="clickable"
                      src={require('./images/stage1.jpg')}
                      style={{ width: '75%', height: '75%' }}
                    />
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    target='_blank'
                    href='https://www.figma.com/proto/pdoZMmsjPyeg3UyD4nclXl/Untitled?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1'
                  >
                    <img
                      className="clickable"
                      src={require('./images/stage2.jpg')}
                      style={{ width: '75%', height: '75%' }}
                    />
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    target='_blank'
                    href='https://www.figma.com/proto/pdoZMmsjPyeg3UyD4nclXl/Untitled?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1'
                  >
                    <img
                      className="clickable"
                      src={require('./images/stage3.jpg')}
                      style={{ width: '75%', height: '75%' }}
                    />
                  </a>
                </Carousel.Item>
              </Carousel>
            </FadeSection>
          </div>
        </gridbody>
      </div>
      <div className='HW-header-two'>
        <FadeSection>
          <div style={{marginBottom:"50vh"}}>
            <br></br>
            <span>
              <h1>Observations</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <p style={{ width: '65vw', fontSize: 20, textAlign: 'left', marginBottom:"50vh" }}>
              A lot of users had to zoom out, since the interface starts out
              zoomed in (not pictured in the demo). Some users looked confused
              at the wall of text at first glace. Some users would ask to
              confirm the due date, or ask whether the process would cost any
              money. Most users are able to navigate the interface and sign
              successfully by the end, but some occasionally need help finding
              where to sign.
            </p>
          </div>
        </FadeSection>
            <FadeSection>
        <Carousel
          controls={false}
          interval={null}
          style={{ marginBottom: '100vh' }}
        >
          <Carousel.Item style={{ marginBottom: '10vh' }}>
            <div>
              <br></br>
              <h1>Questions</h1>
              <br></br>
              <span>
                {
                  <ul style={{ fontSize: 'large' }}>
                    <li>
                      Was there anything in the signing process that was
                      different than what you expected?
                    </li>
                    <li>
                      Were there anything particularly clear or confusing about the interface's display of information?
                    </li>
                    <li>
                      Was there ever a time when you were confused about what to
                      do next?
                    </li>
                    <li>Is there anything you would change about the form?</li>
                  </ul>
                }
              </span>
            </div>
          </Carousel.Item>
          <Carousel.Item style={{ marginBottom: '10vh' }}>
            <div>
              <br></br>
              <h1>Answer Summaries</h1>
              <br></br>
              <span>
                {
                  <ul style={{ fontSize: 'large' }}>
                    <li>
                      Many users thought that some of the info (due date, cost)
                      were misleading, or that the information presented was not
                      concise.
                    </li>
                    <li>
                      Despite these, almost everyone was able to use the device
                      successfully without help.
                    </li>
                    <li>
                      Many users were frustrated about having to zoom out at the
                      start.
                    </li>
                    <li>Most people would change the design in some way.</li>
                  </ul>
                }
              </span>
            </div>
          </Carousel.Item>
        </Carousel>
            </FadeSection>
      </div>
      <div className='HW-header-three'>
        <FadeSection>
          <div style={{marginBottom:"50vh"}}>
            <br></br>
            <span>
              <h1>Personas</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <p
              style={{
                width: '65vw',
                fontSize: 20,
                marginBottom: '50vh',
                textAlign: 'left'
              }}
            >
              I created two personas for people interacting with this interface:
              <ol style={{ textAlign: 'left' }}>
                <li>someone who is no hurry to get their rental</li>
                <li>
                  someone who just broke their laptop and needs a replacement as
                  soon as possible
                </li>
              </ol>
              These people face the problems of overwhelming/unclear
              information, an unaesthetic interface (with lots of unused
              whitespace at the bottom, cramping the text), and a lack of visual
              cues.
            </p>
            <br></br>
            <p
              style={{
                width: '65vw',
                fontSize: 20,
                marginBottom: '50vh',
                textAlign: 'left'
              }}
            >
              The first persona personifies the typical user who is not in a
              particular rush to get the rental done. The second personies the
              typical user who is stressed out about some incident and is in a
              rush to get a rental. Most users of this interface can be
              represented by one of these two personas.
            </p>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <br></br>
            <span>
              <img
                src={require('./images/happy_harold.png')}
                style={{ width: '60%', height: '60%', marginBottom: '50vh' }}
              />
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <span>
              <img
                src={require('./images/stressed_stephen.png')}
                style={{ width: '60%', height: '60%', marginBottom: '100vh' }}
              />
            </span>
          </div>
        </FadeSection>
      </div>
      <div className='HW-header-four'>
        <FadeSection>
          <div>
            <br></br>
            <span>
              <h1>Storyboard</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <p style={{ width: '50vw', fontSize: 20, marginBottom: '50vh', marginTop: '50vh' }}>
              This storyboard displays the second persona's user journey as they
              rent out a laptop.
            </p>
          </div>
        </FadeSection>
        <FadeSection>
          <div style={{marginBottom:"50vh"}}>
            <span>
              <img
                src={require('./images/storyboard.png')}
                style={{ width: '60%', height: '60%' }}
              />
            </span>
          </div>
        </FadeSection>
      </div>
    </>
  )
}

export default Homework1
