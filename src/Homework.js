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
                    As part of a project for CSCI1300, our team of four students
                    were tasked with picking a startup and designing an interface for it. 
                    We chose DimOrder, a company that seeks to
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
            <h2 style={{ marginTop: '10vh' }}> Set 2</h2>
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
            <h2 style={{ marginTop: '10vh' }}> Set 3</h2>
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
            <h2 style={{ marginTop: '10vh' }}> Set 4</h2>
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
            <FadeSection>
              <h2> Combined Wireframe</h2>
              <br></br>
              <span>
                <img
                  src={require('./images/wireframes/Co1.png')}
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
                  src={require('./images/wireframes/Co2.png')}
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
                  src={require('./images/wireframes/Co3.png')}
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
                  src={require('./images/wireframes/Co4.png')}
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
                  src={require('./images/wireframes/Co5.png')}
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
                  src={require('./images/wireframes/Co6.png')}
                  style={{
                    width: '30%',
                    height: '30%',
                    marginBottom: '10vh',
                    marginRight: '2vw'
                  }}
                />
              </span>
            </FadeSection>
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
              <h2 style={{ marginBottom: '10vh' }}>Revised Figma Prototype</h2>
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
          <FadeSection>
            <div style={{ marginBottom: '10vh' }}>
              <br></br>
              <span>
                <h1>Critique Feedback</h1>
              </span>
            </div>
            <div>
              <ul
                style={{
                  textAlign: 'left',
                  marginLeft: '30vw',
                  marginBottom: '10vh'
                }}
              >
                <li>
                  Navigation is confusing, suggested a back button between
                  intermediate screens
                </li>
                <li>The edit buttons are not obvious and hard to find</li>
                <li>Unclear how to delete menu items</li>
                <li>
                  The edit order page is confusing because it is unclear
                  "entrees" menu is selected
                </li>
                <li>
                  Include more at a glance table information in the layout view
                </li>
              </ul>
            </div>

            <div>
              <a
                target='_blank'
                href='https://www.figma.com/proto/pehJfzn0mIbeRGLxqmDI2b/DimOrder---precrit?scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A3&node-id=6%3A3'
              >
                <img
                  src={require('./images/beforeandafter.png')}
                  style={{ width: '40%', height: '40%', marginBottom: '4vh' }}
                />
              </a>
            </div>

            <div style={{ marginBottom: '10vh' }}>
              <br></br>
              <span>
                <p style={{ fontSize: 'large' }}>A comparison of the original 
                (top) and revised (below) prototypes;
                  click on the image to view the original figma file
                </p>
              </span>
            </div>


            
          </FadeSection>
        </div>
      </div>
      <div className='HW-header-four'>
        <FadeSection>
          <div>
            <span>
              <h1 style={{ marginBottom: '5vh' }}>
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
            <h3>Test 1</h3>
          </a>
          <a
            target='_blank'
            href='https://app.usertesting.com/v/13b5e619-588c-4d15-8a8e-ef3e9cf5f271?encrypted_video_handle=2597507a-e2b4-4443-804e-cefc7a9e74a3&utm_campaign=email_clicks&utm_medium=email&utm_source=usertesting.com_system#!/notes&shared_via=link'
          >
            <br></br>
            <h3>Test 2</h3>
          </a>
          <a
            target='_blank'
            href='https://app.usertesting.com/v/0c9d82b0-73fd-4798-818c-afd4be96ec73?encrypted_video_handle=cef0dd90-42e4-4ec1-b8a1-7322e8202c96&utm_campaign=email_clicks&utm_medium=email&utm_source=usertesting.com_system#!/notes&shared_via=link'
          >
            <br></br>
            <h3>Test 3</h3>
          </a>
          <div
            style={{
              width: '50vw',
              fontSize: 20,
              marginBottom: '0vh'
            }}
          ></div>
          <div
            style={{
              width: '60vw'
            }}
          >
            <div style={{ marginBottom: '10vh' }}>
              <br></br>
              <span>
                <p style={{ fontSize: 'x-large', width: "50vw", textAlign:"left", marginLeft:"5vw"}}>note: the videos show the prototype as
                going out of the tablet container, but since none of the users mentioned
                this glitch, we are assuming it is a screen recorder issue
                </p>
              </span>
            </div>
            <ul
              style={{
                textAlign: 'left',
                marginBottom: '20vh',
                marginLeft: '5vw'
              }}
            >
              <li >
                The task we assigned was to follow a waiter's workflow, changing
                an order, and finalizing the payment. This was put into usertesting.com like so:
              </li> 
              <ul>
                <li>Background blurb: This is a prototype software for restaurants that help them manage their tables.
                   Note that not all of the buttons are completely functional and not all the pages are fully built. 
                   View the prototype in landscape orientation. You are Amanda, a server at a sit down restaurant. 
                   You use this software on an iPad at work. 
                  Please think out loud as you complete the tasks. </li>
                <li>Task 1: Table 2 has decided to cancel their order of noodles. 
                  Please remove the "noodles" item from Table 2's order. </li>
                <li>Task 2: You have given Table 2 their check and they informed you they would 
                  like to split the bill evenly among the three of them, giving you 3 credit cards. 
                  Imagine that you've brought the 3
                  credit cards back to the iPad. Please split Table 2's bill evenly 3 ways.</li>
                <li>Task 3: Explore the interface as if you are doing other tasks a waiter might do. 
                  Briefly summarize the main issues you experienced and any general comments you may have.
</li>
             </ul>

              <li >  
                The results, which
                were mostly positive, aligned with our expectations. The users
                were able to complete the tasks, but because of an unfinished
                part, one task (splitting the check) was confusing for some.
              </li>

              <li >
                Overall positive impression of prototype and design; users
                thought the design, especially the receipt preview on the side, was
                intuitive
              </li>
              <li >
                Deleting an item was very easy and completely successfully by
                all testers, although one user mentioned that having all the
                edit and delete buttons so close together might result in
                mechanical errors
              </li>
              <li >
                Splitting the check was easy as well, although some users felt
                that it was unclear whether or not the splitting went through
              </li>
            </ul>
          </div>
        </FadeSection>
        <FadeSection>
          <h2>Potential Improvements</h2>
          <div
            style={{
              width: '50vw'
            }}
          >
            <ul
              style={{
                textAlign: 'left',
                marginTop: '10vh',
                marginBottom: '40vh',
                marginLeft: '5vw'
              }}
            >
              <li>
                Make the edit and delete icons larger and more spaced out to
                avoid misclicks
              </li>
              <li>
                Add a confirmation screen after check has been split Table view
                details can be made more clear
              </li>
              <li>
                Clarifying table view and list view interface with more visual elements
              </li>
            </ul>
          </div>
        </FadeSection>
      </div>
    </>
  )
}

export default Homework
