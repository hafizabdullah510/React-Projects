import React from "react";

const Footer = () => {
  return (
    <section className="footer-sec">
      <section className="section-center footer-center">
        <div
          style={{
            marginRight: "3px",
            color: "#fff",
            letterSpacing: ".1rem",
          }}
        >
          @ 2022 <span className="footer-comfy">ComfySloth</span>
        </div>
        <div style={{ color: "#fff", letterSpacing: ".1rem" }}>
          All Right Reserved
        </div>
      </section>
    </section>
  );
};

export default Footer;
