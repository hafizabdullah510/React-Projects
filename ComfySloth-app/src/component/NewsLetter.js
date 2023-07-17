import React from "react";

const NewsLetter = () => {
  return (
    <section>
      <section className="section-center">
        <div className="newsletter-c">
          <div className="news-txt-c">
            <h2 className="nl-t">Join our newsletter and get 20% off</h2>
            <p className="nl-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </div>
          <div className="email-c">
            <input
              placeholder="Enter Email"
              className="email-input"
              name="email"
            />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewsLetter;
