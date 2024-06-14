import React from "react"

function Apostrophe({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="43"
      viewBox="0 0 60 43"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0-9h60v60H0z"/>
        <path
          fill="#FFAB13"
          fillRule="nonzero"
          d="M60 17.2V43H35V17.2L43.333 0h12.5L47.5 17.2H60zM25 43H0V17.2L8.333 0h12.5L12.5 17.2H25V43z"
        />
      </g>
    </svg>
  )
}

export { Apostrophe }