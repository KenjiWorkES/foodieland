import React from "react";
import "./Social.css";

function Twitter({ scale = 1, color = "black", className }) {
  const styles = {
    transform: `scale(${scale})`,
  };

  return (
    <a className="social__link" href="#">
      <svg
        className={`${className}`}
        style={styles}
        width="23"
        height="18"
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9619 2.11613C22.1438 2.475 21.272 2.71288 20.3632 2.82838C21.2982 2.27013 22.0118 1.39287 22.3473 0.3355C21.4755 0.85525 20.513 1.22238 19.4873 1.42725C18.6595 0.545875 17.4798 0 16.1928 0C13.6958 0 11.6855 2.02675 11.6855 4.51137C11.6855 4.86888 11.7158 5.21263 11.79 5.53988C8.04041 5.357 4.72254 3.55988 2.49366 0.82225C2.10454 1.49738 1.87629 2.27012 1.87629 3.102C1.87629 4.664 2.68066 6.04862 3.87966 6.85025C3.15504 6.8365 2.44416 6.62613 1.84191 6.29475C1.84191 6.3085 1.84191 6.32638 1.84191 6.34425C1.84191 8.536 3.40529 10.3565 5.45541 10.7759C5.08829 10.8763 4.68816 10.9244 4.27291 10.9244C3.98416 10.9244 3.69266 10.9079 3.41904 10.8474C4.00341 12.6335 5.66166 13.9466 7.63341 13.9893C6.09891 15.1896 4.15054 15.9129 2.04129 15.9129C1.67141 15.9129 1.31666 15.8964 0.961914 15.851C2.95979 17.1394 5.32754 17.875 7.88091 17.875C16.1804 17.875 20.7179 11 20.7179 5.04075C20.7179 4.84137 20.711 4.64887 20.7014 4.45775C21.5965 3.8225 22.3487 3.02913 22.9619 2.11613Z"
          fill={color}
        />
      </svg>
    </a>
  );
}

export default Twitter;
