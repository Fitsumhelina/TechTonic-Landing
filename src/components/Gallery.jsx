// WorkSection.jsx
import React from 'react';
import './../scss/Galler.scss'; // Import your SCSS file here

const Gallery = () => {
  const Images = [
    { src: 'img/work/1.jpg', alt: 'work 1' },
    { src: 'img/work/2.jpg', alt: 'work 2' },
    { src: 'img/work/3.jpg', alt: 'work 3' },
    { src: 'img/work/4.jpg', alt: 'work 4' },
    { src: 'img/work/5.jpg', alt: 'work 5' },
    { src: 'img/work/6.jpg', alt: 'work 6' },
    { src: 'img/work/7.jpg', alt: 'work 7' },
    { src: 'img/work/8.jpg', alt: 'work 8' },
  ];

  return (
    <section id="work">
      <div className="content-box">
        <div className="content-title wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
          <h3>Gallery</h3>
          <div className="content-title-underline"></div>
        </div>

        <div className="container-fluid">
          <div className="row no-gutters wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            {Images.map((image, index) => (
              <div className="col-md-3 col-sm-4" key={index}>
                <div className="img-wrapper">
                  <a href={image.src} title="work description goes here">
                    <img src={image.src} className="img-responsive" alt={image.alt} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
