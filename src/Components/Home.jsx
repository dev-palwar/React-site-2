import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from './About';

// Images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import Home_headings from './Home_headings';

function Home() {
  const images = [
    {
      url: img1,
      alt: 'Watch the future',
      legend: 'Slide 1',
    },
    {
      url: img2,
      alt: 'Gaming is future',
      legend: 'Slide 2',
    },
    {
      url: img3,
      alt: 'Future is gaming',
      legend: 'Slide 3',
    },
    {
      url: img4,
      alt: 'Night life is cool',
      legend: 'Slide 3',
    },
  ];

  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Home_headings title={image.alt} />
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Carousel>
      <About />
    </>
  );
}

export default Home;
