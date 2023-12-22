import React from 'react';
import './Section.css';

function Section(props) {
  return (
    <div>
      <hr></hr>
      <div className='section'>
        <div className='text'>
          <h1>{props.name}</h1>
          <h3>{props.description}</h3>
        </div>
        <div className='screen'>
          <img
            src={props.image}
            alt='TV Screen'
          />
          {props.video ? (<div className='video-container'>
            <video controls autoPlay playsInline muted loop>
              <source src={props.video} type='video/x-m4v' />
            </video>
          </div> ):(
            ""
          )
          }
          
        </div>
      </div>
      <hr className='hr'></hr>
    </div>
  );
}

export default Section;
