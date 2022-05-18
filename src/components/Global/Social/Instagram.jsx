import React from "react";
import "./Social.css";

function Instagram({ scale = 1, color = "black", className }) {
  const styles = {
    transform: `scale(${scale})`,
  };

  return (
    <a className="social__link" href="#">
      <svg
        className={`${className}`}
        style={styles}
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.83643 0H16.0864C19.8828 0 22.9614 3.07862 22.9614 6.875V15.125C22.9614 18.9214 19.8828 22 16.0864 22H7.83643C4.04005 22 0.961426 18.9214 0.961426 15.125V6.875C0.961426 3.07862 4.04005 0 7.83643 0ZM16.0864 19.9375C18.7402 19.9375 20.8989 17.7787 20.8989 15.125V6.875C20.8989 4.22125 18.7402 2.0625 16.0864 2.0625H7.83643C5.18268 2.0625 3.02393 4.22125 3.02393 6.875V15.125C3.02393 17.7787 5.18268 19.9375 7.83643 19.9375H16.0864Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.46143 11C6.46143 7.96263 8.92405 5.5 11.9614 5.5C14.9988 5.5 17.4614 7.96263 17.4614 11C17.4614 14.0374 14.9988 16.5 11.9614 16.5C8.92405 16.5 6.46143 14.0374 6.46143 11ZM8.52393 11C8.52393 12.8948 10.0667 14.4375 11.9614 14.4375C13.8562 14.4375 15.3989 12.8948 15.3989 11C15.3989 9.10388 13.8562 7.5625 11.9614 7.5625C10.0667 7.5625 8.52393 9.10388 8.52393 11Z"
          fill={color}
        />
        <circle cx="17.874" cy="5.08749" r="0.732875" fill={color} />
      </svg>
    </a>
  );
}

export default Instagram;
