import React from "react"

function Performance2({ className }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 370 200"
      >
        <defs>
          <linearGradient id="b2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#8131A4"/>
            <stop offset="100%" stopColor="#4A166B"/>
          </linearGradient>
          <path id="a2" d="M0 0h370v200H0z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="c2" fill="#fff">
            <use xlinkHref="#a2"/>
          </mask>
          <use fill="url(#b2)" xlinkHref="#a2"/>
          <g fill="#FFAB13" fillRule="nonzero" mask="url(#c)">
            <path
              d="M322.347 155.754c3.115 0 5.653 2.525 5.653 5.625s-2.538 5.626-5.653 5.626c-3.115 0-5.653-2.525-5.653-5.626 0-3.1 2.538-5.625 5.653-5.625zm0 8.824a3.21 3.21 0 0 0 3.215-3.199 3.21 3.21 0 0 0-3.215-3.198 3.21 3.21 0 0 0-3.214 3.198 3.21 3.21 0 0 0 3.214 3.2zm-1.219-39.488v-2.427h2.438v2.427h-2.438zm0 11.03v-2.426h2.438v2.426h-2.438zm0 11.03v-2.426h2.438v2.426h-2.438zM203.306 37.625c0 3.1-2.538 5.626-5.653 5.626-3.115 0-5.653-2.525-5.653-5.626 0-3.1 2.538-5.625 5.653-5.625 3.115 0 5.653 2.525 5.653 5.625zm-8.868 0a3.21 3.21 0 0 0 3.215 3.2 3.21 3.21 0 0 0 3.214-3.2 3.21 3.21 0 0 0-3.214-3.198 3.21 3.21 0 0 0-3.215 3.198zm1.996 16.656v-2.427h2.438v2.427h-2.438zm0 11.03v-2.426h2.438v2.426h-2.438zm0 11.03v-2.426h2.438v2.426h-2.438zm109.052 32.384l4.28 8.517-16.94 16.992-.05.318a5.566 5.566 0 0 1-1.382 2.892l-.601.664.6.664c.944 1.043 1.473 2.357 1.473 3.748 0 1.393-.528 2.706-1.472 3.747l-.602.665.602.664c.943 1.044 1.472 2.358 1.472 3.748 0 3.1-2.538 5.626-5.653 5.626h-16.517v3.199c0 4.318-3.53 7.831-7.87 7.831-4.339 0-7.87-3.513-7.87-7.831v-3.2h-12.585l-6.65-6.617h-18.228v6.618h-13.522v-42.136h12.798l3.385-6.136-.23-.463a47.165 47.165 0 0 1-2.305-5.495l-.16-.464-9.055-3.003v-23.81l9.055-3.004.16-.464a47.389 47.389 0 0 1 2.33-5.54l.218-.442-4.282-8.522 16.917-16.836 8.564 4.262.445-.218a47.876 47.876 0 0 1 5.567-2.318l.466-.16 3.019-9.01h23.927l3.019 9.01.466.16c1.85.632 3.714 1.41 5.567 2.318l.444.218 8.565-4.262 16.917 16.836-4.282 8.522.219.442a47.389 47.389 0 0 1 2.329 5.54l.16.464 9.055 3.004v23.812l-9.054 3.004-.16.463a47.766 47.766 0 0 1-2.33 5.541l-.22.442zm-82.868-.572l.3.576-5.8 10.517h23.468l-2.194-1.764c-9.14-7.353-14.47-18.415-14.47-30.113 0-21.346 17.454-38.716 38.904-38.716 21.45 0 38.905 17.37 38.905 38.716 0 11.829-5.315 22.822-14.53 30.172l-1.925 1.535 2.456.228c2.898.269 5.134 2.673 5.134 5.568 0 1.393-.528 2.706-1.472 3.747l-.6.663.599.665c.103.115.206.239.304.367l.694.91 14.412-14.453-4.055-8.068.287-.55a45.023 45.023 0 0 0 3.024-7.197l.187-.59 8.564-2.84V77.215l-8.564-2.844-.186-.59a44.782 44.782 0 0 0-3.026-7.199l-.286-.549 4.052-8.065-14.431-14.361-8.104 4.032-.554-.286a45.143 45.143 0 0 0-7.23-3.01l-.595-.185-2.853-8.52h-20.41l-2.858 8.522-.593.186a45.242 45.242 0 0 0-7.234 3.01l-.552.285-8.104-4.032L218.85 57.97l4.051 8.065-.287.55a44.684 44.684 0 0 0-3.023 7.197l-.187.59-8.562 2.84v20.312l8.563 2.842.188.59a45.027 45.027 0 0 0 3.024 7.197zm67.81 34.367a3.21 3.21 0 0 0-3.215-3.199h-17.736a3.21 3.21 0 0 0-3.215 3.2 3.21 3.21 0 0 0 3.215 3.198h17.736a3.21 3.21 0 0 0 3.215-3.199zm-22.663-56.144h-9.877l-2.931-2.917V73.14h-.998c-2.996 0-5.43 2.423-5.43 5.405v10.528l8.152 8.113h12.291l8.153-8.113V78.545c0-2.982-2.435-5.405-5.431-5.405h-.998v10.32l-2.931 2.916zm-10.37 13.237v10.81h10.863v-10.81h-10.863zm-8.791 11.224l.417-.415h5.936v-11.52l-8.867-8.825V78.545c0-4.318 3.53-7.831 7.87-7.831h3.435v11.74l1.503 1.496h7.857l1.503-1.495V70.714h3.436c4.339 0 7.87 3.513 7.87 7.831v11.532l-8.868 8.825v11.52h7.03l.25-.164c7.81-5.125 12.45-13.635 12.45-22.889 0-15.146-12.38-27.465-27.6-27.465s-27.599 12.32-27.599 27.465c0 9.294 4.804 17.963 12.7 23.034l.677.434zm44.26-23.468c0 8.928-3.947 17.26-10.821 22.94l-.905.748.889.767a5.568 5.568 0 0 1 1.876 3.334l.271 1.672 1.334-1.052c8.735-6.89 13.785-17.257 13.785-28.409 0-20.01-16.36-36.29-36.467-36.29S226.36 67.36 226.36 87.37c0 11.632 5.623 22.559 15.103 29.392l.69.497 4.64-4.618-.986-.677c-8.128-5.577-13.018-14.78-13.018-24.594 0-16.483 13.474-29.892 30.037-29.892 16.564 0 30.038 13.41 30.038 29.892zm-5.65 34.304h-17.737a3.21 3.21 0 0 0-3.215 3.199 3.21 3.21 0 0 0 3.215 3.199h17.736a3.21 3.21 0 0 0 3.215-3.2 3.21 3.21 0 0 0-3.215-3.198zm-17.737 15.222h17.736a3.21 3.21 0 0 0 3.215-3.199 3.21 3.21 0 0 0-3.215-3.199h-17.736a3.21 3.21 0 0 0-3.215 3.2 3.21 3.21 0 0 0 3.215 3.198zm-54.422 17.648v-37.282h-8.646v37.282h8.646zm39.902-31.154l-6.08 6.05-1.725-1.715 8.52-8.478h22.672a3.21 3.21 0 0 0 3.214-3.198 3.21 3.21 0 0 0-3.214-3.199H250.03l-8.867 8.824h-23.67v26.252h19.237l6.65 6.618h11.577V123.39zm7.87 42.184c2.996 0 5.43-2.423 5.43-5.404v-3.313l-.662-.235c-2.243-.796-3.771-2.893-3.771-5.277 0-1.392.528-2.706 1.472-3.747l.602-.664-.601-.665c-.944-1.043-1.473-2.357-1.473-3.748 0-1.392.528-2.706 1.472-3.747l.602-.664-.601-.665c-.944-1.043-1.473-2.357-1.473-3.748 0-1.393.528-2.706 1.472-3.747l.602-.664-.601-.665c-.944-1.043-1.473-2.357-1.473-3.748 0-.612.12-1.23.35-1.872l.477-1.327h-7.256v38.496c0 2.981 2.435 5.404 5.431 5.404zm24.386-11.03a3.21 3.21 0 0 0 3.215-3.199 3.21 3.21 0 0 0-3.215-3.198h-17.736a3.21 3.21 0 0 0-3.215 3.198 3.21 3.21 0 0 0 3.215 3.2h17.736z"/>
          </g>
          <path fill="#FFF" fillRule="nonzero"
                d="M0 156c-29 0-47-21.165-47-56 0-35.496 18.22-56 47-56 27.854 0 46 20.43 46 56 0 34.688-17.927 56-46 56zm0-24c8.735 0 15-10.422 15-32 0-22.092-6.265-32-15-32-8.66 0-15 9.908-15 32 0 21.578 6.34 32 15 32zm56-52c0-21.447 17.038-36 43-36s41.751 13.01 42 32c-.249 14.82-12.44 25.844-18 31l-25 22h44v24H58v-21l42-37c7.556-6.827 10.787-11.898 11-18-.213-5.511-4.84-9.995-13-10-7.923.005-13.652 5.444-14 13v1H56v-1z"
                mask="url(#c2)" opacity=".3"/>
        </g>
      </svg>


    </div>
  )
}

export { Performance2 }