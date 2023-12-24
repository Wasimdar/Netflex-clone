import React from 'react'
import './BottomSection.css';
import ExpenseItem from './ExpenseItem';
import EmailFeild from '../EmailFeild';
import Footer from './Footer';

function BottomSection() {
    const Questions =[
        {id:'1' , title:'What is Netflix ?' , description:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.' },
        {id:'2' , title:'How much does Netflix cost?' , description:' Send children on adventures with their favourite characters in a space made just for them—free with your membership.' },
        {id:'3' , title:'Where can i watch?' , description: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles'},
        {id:'4' , title:'How do i cancel' , description: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'},
        {id:'5' , title:'What can i Watch on Netflix ? ' , description:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'},
        {id:'6' , title:'Is Netflix good for kids?' , description:'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'}
    ]
    return (
        <div>
            <hr></hr>
            <div className='bottom-section'>
            <h1 className='Head-texts'>Frequently Asked Questions</h1>
               {Questions.map((question ,index)=>(
                 <ExpenseItem key={index} 
                 title={question.title} 
                 description={question.description}  />
               ))}
              <div className='input-part'>
              <p className='info'>Ready to watch? Enter your email to create or restart your membership.</p>
 
                <EmailFeild  />
              </div>
                
            </div>
            <hr className='hr'></hr>
            <Footer />
        </div>
    )
}

export default BottomSection