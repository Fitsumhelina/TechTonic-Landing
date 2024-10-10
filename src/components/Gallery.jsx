// WorkSection.jsx
import React from 'react';
import './../scss/Gallery.scss'; // Import your SCSS file here

const Gallery = () => {
  const Images = [
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHAPxRF7YA9cA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728424975693?e=1731542400&v=beta&t=RAVt-iQ1rLCuZnzAwUYkp229ftVsALETImPtDaALdKQ', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E22AQHAPxRF7YA9cA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728424975693?e=1731542400&v=beta&t=RAVt-iQ1rLCuZnzAwUYkp229ftVsALETImPtDaALdKQ', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },
    { src: 'https://media.licdn.com/dms/image/v2/D4E03AQGBtQpAJuKPVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727532743470?e=1733961600&v=beta&t=xM-9fkD9WrrBF3_9u8cAmJav46jF9Gg6mRlj-x7O8Mk', alt: 'work 1' },

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
