// WorkSection.jsx
import React from 'react';
import './../scss/Gallery.scss'; 
import pic1 from './../../public/assets/pic1.jpg'
import pic2 from './../../public/assets/pic2.jpg'
import pic3 from './../../public/assets/pic3.jpg'
import pic4 from './../../public/assets/pic4.jpg'
import pic5 from './../../public/assets/pic5.jpg'
import pic6 from './../../public/assets/pic6.jpg'
import pic7 from './../../public/assets/pic7.jpg'
import pic8 from './../../public/assets/pic8.jpg'
import pic9 from './../../public/assets/pic9.jpg'

const Gallery = () => {
  const Images = [
    { src:pic1 ,alt: 'work 1' },
    { src:pic2 ,alt: 'work 1' },
    { src:pic3 ,alt: 'work 1' },
    { src:pic8 ,alt: 'work 1' },
    { src:pic4 ,alt: 'work 1' },
    { src:pic5 ,alt: 'work 1' },
    { src:pic6 ,alt: 'work 1' },
    { src:pic7 ,alt: 'work 1' },
    { src:pic9 ,alt: 'work 1' },
   
  ];

  return (
    <section className="Gallery">
      <div className="content-box">
        <div className="content-title" data-wow-duration="1s" data-wow-delay=".5s">
          <h3>Gallery</h3>
          <div className="content-title-underline"></div>
        </div>

        <div className="container-fluid">
          <div className="images" data-wow-duration="1s" data-wow-delay=".5s">
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
