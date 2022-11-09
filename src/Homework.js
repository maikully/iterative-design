import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { React, Grid, Item } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import FadeSection from './FadeSection'
import { Carousel, Fade } from 'react-bootstrap'
function Homework () {
  return (
    <>
      <div className='HW-header'>
        <FadeSection>
          <div style={{ marginTop: '10vh' }}>
            <br></br>
            <span>
              <h1>The Startup</h1>
            </span>
          </div>
        </FadeSection>
        <gridbody style={{ marginTop: '10vh' }}>
          <div class='block block-block1'>
            <FadeSection>
              <div style={{ width: '30vw', textAlign: 'left' }}>
                <span>
                  <a style={{ fontSize: 'large', textAlign: 'left' }}>
                    For our startup, we chose DimOrder, a company that seeks to
                    provide business solutions to restaurants in Southeast Asia.
                    The startup's description mentions both ordering from
                    suppliers and point-of-sale systems used when interacting
                    with customers. We then chose to design an easy-to-use but
                    informative, tablet-based interface for the point-of-sale
                    system, inspired by restaurant experiences we have had. This
                    interface would be used by waiters and restaurant staff,
                    streamlining their job, so they could easily access and
                    retrieve information and focus on the customers.
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
              <a target='_blank' href='https://www.dimorder.com/'>
                <img
                  className='clickable'
                  src={require('./images/dimorder.png')}
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
            </FadeSection>
          </div>
        </gridbody>
      </div>
      <div className='HW-header-two'>
        <FadeSection>
          <div style={{ marginBottom: '20vh' }}>
            <br></br>
            <span>
              <h1>Low-Fidelity Wireframing</h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <h2> Set 1</h2>
            <br></br>
            <span>
              <img
                src={require('./images/wireframes/C1.png')}
                style={{
                  width: '30%',
                  height: '30%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/C2.png')}
                style={{
                  width: '30%',
                  height: '30%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/C3.png')}
                style={{ width: '30%', height: '30', marginBottom: '10vh' }}
              />
            </span>
          </div>

          </FadeSection>
        <FadeSection>
          <div>
            <h2 style={{marginTop:"10vh"}}> Set 2</h2>
            <br></br>
            <span>
              <img
                src={require('./images/wireframes/L1.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/L2.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/L3.png')}
                style={{ width: '20%', height: '20', marginBottom: '10vh' }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/L4.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/L5.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/L6.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <div>
            <h2 style={{marginTop:"10vh"}}> Set 3</h2>
            <br></br>
            <span>
              <img
                src={require('./images/wireframes/W1.png')}
                style={{
                  width: '30%',
                  height: '30%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/W2.png')}
                style={{
                  width: '30%',
                  height: '30%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/W3.png')}
                style={{ width: '30%', height: '30', marginBottom: '10vh' }}
              />
            </span>
          </div>

          </FadeSection>
          <FadeSection>
          <div>
            <h2 style={{marginTop:"10vh"}}> Set 4</h2>
            <br></br>
            <span>
              <img
                src={require('./images/wireframes/M1.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/M2.png')}
                style={{
                  width: '20%',
                  height: '20%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
            <span>
              <img
                src={require('./images/wireframes/M3.png')}
                style={{ width: '20%', height: '20', marginBottom: '10vh' }}
              />
            </span>
          </div>
          <div>
            <h2> Combined Wireframe</h2>
            <br></br>
            <span>
              <img
                src={require('./images/wireframes/M1.png')}
                style={{
                  width: '30%',
                  height: '30%',
                  marginBottom: '10vh',
                  marginRight: '2vw'
                }}
              />
            </span>
          </div>
        </FadeSection>
      </div>
      <div className='HW-header-three'>
        <FadeSection>
          <div style={{ marginBottom: '10vh' }}>
            <br></br>
            <span>
              <h1>High-Fidelity Prototyping</h1>
            </span>
          </div>
        </FadeSection>
        <div>
          <FadeSection>
            <span>
              <h2 style={{ marginBottom: '10vh' }}>Figma Prototype</h2>
            </span>
            <div>
              <a
                target='_blank'
                href='https://www.figma.com/proto/NRIbtKQEZUgkpWhue9Jjq9/DimOrder-Iterative-Design?page-id=0%3A1&node-id=178%3A42&viewport=-459%2C835%2C0.41&scaling=scale-down&starting-point-node-id=6%3A3'
              >
                <img
                  src={require('./images/figma.png')}
                  style={{ width: '40%', height: '40%', marginBottom: '10vh' }}
                />
              </a>
            </div>
          </FadeSection>
          <div style={{ marginBottom: '10vh' }}>
            <br></br>
            <span>
              <h1>Critique Feedback</h1>
            </span>
          </div>
          <div>
            <ul style={{ textAlign: 'left', marginLeft: '30vw' }}>
              <li>
                Navigation is confusing, suggested a back button between intermediate screens
              </li>
              <li>The edit buttons are not obvious and hard to find</li>
              <li>Unclear how to delete menu items</li>
              <li>
                The edit order page is confusing because it is unclear
                "entrees" menu is selected
              </li>
              <li>Include more at a glance table information in the layout view</li>
            </ul>
          </div>

          <div>
              <a
                target='_blank'
                href='https://www.figma.com/proto/pehJfzn0mIbeRGLxqmDI2b/DimOrder---precrit?scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A3&node-id=6%3A3'
              >
                <img
                  src={require('./images/beforeandafter.png')}
                  style={{ width: '40%', height: '40%', marginBottom: '10vh' }}
                />
              </a>
            </div>

        </div>
      </div>
      <div className='HW-header-four'>
        <FadeSection>
          <div>
            <span>
              <h1 style={{ marginBottom: '10vh' }}>
                User Testing Results & Analysis
              </h1>
            </span>
          </div>
        </FadeSection>
        <FadeSection>
          <a
            target='_blank'
            href='https://app.usertesting.com/v/45df63d2-c0a3-4099-91d4-9c4e9ad38860?encrypted_video_handle=d89b2372-3472-43b3-a65c-4c7936887daa&utm_campaign=email_clicks&utm_medium=email&utm_source=usertesting.com_system#!/notes&shared_via=link'
          >
            <h2>Test 1</h2>
          </a>
          <a
            target='_blank'
            href='https://app.usertesting.com/v/13b5e619-588c-4d15-8a8e-ef3e9cf5f271?encrypted_video_handle=2597507a-e2b4-4443-804e-cefc7a9e74a3&utm_campaign=email_clicks&utm_medium=email&utm_source=usertesting.com_system#!/notes&shared_via=link'
          >
            <br></br>
            <h2>Test 2</h2>
          </a>
          <a
            target='_blank'
            href='https://app.usertesting.com/v/0c9d82b0-73fd-4798-818c-afd4be96ec73?encrypted_video_handle=cef0dd90-42e4-4ec1-b8a1-7322e8202c96&utm_campaign=email_clicks&utm_medium=email&utm_source=usertesting.com_system#!/notes&shared_via=link'
          >
            <br></br>
            <h2>Test 3</h2>
          </a>
          <div
            style={{
              width: '50vw',
              fontSize: 20,
              marginBottom: '10vh'
            }}
          ></div>
        </FadeSection>
      </div>
    </>
  )
}

export default Homework
