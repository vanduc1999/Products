import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="info">
        <h3 className="h3">Contact Info</h3>
        <ul class="info-list">
          <li>Open: 08H30 - 17H45</li>
          <li>
            Phone:
            <a class="phone" href="#">
              0365024519
            </a>
          </li>
          <li>
            Email:{" "}
            <a class="email" href="#">
              duc18211tt0051@gmail.com
            </a>
          </li>
        </ul>
        <ul className="info-icon">
          <li>
            <a class="facebook" href="#"></a>
          </li>
        </ul>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.655575581417!2d106.62764837340012!3d10.761005559481337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e9d4ce7b921%3A0xe65a19976cc8db08!2zMzMgTMawxqFuZyBNaW5oIE5ndXnhu4d0LCBUw6JuIFRo4bubaSBIb8OgLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690999750941!5m2!1svi!2s"
          width="600"
          height="auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer__content">
        <h3 class="footer__title">Contact Us</h3>

        <ul class="footer__data">
          <li class="footer__information">+89-365024519</li>

          <div class="footer__social">
            <a href="https://www.facebook.com/yourpage">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            </a>

            <a href="https://www.instagram.com/youraccount">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>

            <a href="https://www.youtube.com/youraccount">
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 10rem;
  display: flex;
  background: var(--clr-black);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .info {
    color: white;
  }
  .h3 {
    padding-left: 15px;
  }
  a {
    color: white;
  }
  .info-list {
    padding-left: 15px;
  }

  .footer__content {
    color: #ffff;
    padding-right: 15px;
  }
  .footer__social {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
