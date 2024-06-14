import React from "react"

function TelegramLink({ className, color = "#fff" }) {
  return (
    <a
      href="https://t.me/joinchat/DQIDQU7Naz7doknz7u8meQ"
      className={className}
      target='__blank'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="17"
        viewBox="0 0 20 17"
      >
        <g
          fill="none"
          fillRule="evenodd"
        >
          <path d="M0-1h20v20H0z"/>
          <path
            fill={color}
            fillRule="nonzero"
            d="M.391 8.158L4.99 9.83l1.78 5.579c.116.358.563.49.859.253l2.563-2.035a.783.783 0 0 1 .934-.027l4.623 3.272c.319.225.77.054.85-.32L19.988.674c.088-.408-.327-.75-.727-.6L.387 7.17a.524.524 0 0 0 .004.988zm6.092.785l8.99-5.395c.16-.097.327.117.188.241l-7.417 6.718c-.26.238-.428.553-.476.895l-.251 1.825c-.032.245-.383.268-.455.03l-.97-3.325a.866.866 0 0 1 .391-.989z"
          />
        </g>
      </svg>
    </a>
  )
}

export { TelegramLink }