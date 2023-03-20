import React from 'react'
import '../../styles/HomeSection.css';
import videoHome from '../../videos/bg-video.mp4';
import imgHome from '../../images/phoneapp.png';

function HomeSection() {
  return (
    <section className='home-section' id='home'>
        <div className='home-section-video-c'>
            <video className='home-section-video' src={videoHome} autoPlay muted loop></video>
        </div>
        <div className='filtro'></div>
        <div className='home-section-info-c'>
            <div className='home-section-info'>
                <div className='home-section-title'>
                  <span className='title-name'>Beat Bash</span><span className='title-text'>: Discover New Music Every Day</span>
                  </div>
                <p className='home-section-description'>
                Our app offers a seamless and personalized music experience like no other.
                 With access to millions of songs and a user-friendly interface,
                  you'll be able to discover new music, create playlists, and enjoy all your favorite tunes in one place.
                </p>
                <div className='home-section-btn-c'>
                    <a href='#learnmore'><button className='home-section-btn-1'>Learn more</button></a>
                    <button className='home-section-btn-2'>Download now</button>
                </div>
            </div>
            <div className='home-section-img'>
                <img src={imgHome} />
            </div>
        </div>
    </section>
  )
}

export default HomeSection