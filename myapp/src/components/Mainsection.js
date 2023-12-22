import React from 'react'
import Section from './Sections/Section'

function Mainsection() {
    const sections = [
        {
            id: '1',
            name: 'Enjoy on your TV',
            description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v',
            image:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
        },
        {
            id: '2',
            name: 'Watch everywhere',
            description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            image:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' ,
            video:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
        },
        {
            id:'3',
            name:'Create profiles for kids',
            description:'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            image:'https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54'

        }

    ]


    return (
        <>
            {sections.map((section, index) => (
                <Section key={index}
                    name={section.name}
                    description={section.description}
                    image={section.image}
                    video={section.video}
                    
                />
            ))}

        </>

    )
}

export default Mainsection