import React from "react"

function Performance1({ className }) {
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
          <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD321"/>
            <stop offset="100%" stopColor="#FFAB13"/>
          </linearGradient>
          <path id="a" d="M0 0h370v200H0z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="c" fill="#fff">
            <use xlinkHref="#a"/>
          </mask>
          <use fill="url(#b)" xlinkHref="#a"/>
          <path fill="#4A166B" fillRule="nonzero"
                d="M323.549 130.045H328v5.667c0 3.123-2.552 5.667-5.685 5.667h-16.57v16.517c0 5.57-4.548 10.104-10.136 10.104H192v-1.23c0-4.815 3.428-8.948 8.109-9.9l.793-.161v-19.428l-.283-.288a14.45 14.45 0 0 1 0-20.31l.283-.287v-29.49c0-12.908 10.54-23.414 23.49-23.414h38.166l-17.583-21.03L255.472 32l27.23 22.619h26.26c8.042 0 14.587 6.524 14.587 14.54v8.874c0 3.84-1.514 7.449-4.169 10.155l-.282.288v9.523a3.458 3.458 0 0 1-3.46 3.448h-4.45a3.458 3.458 0 0 1-3.46-3.448v-5.425h-6.434v5.425a3.458 3.458 0 0 1-3.46 3.448h-4.451a3.458 3.458 0 0 1-3.46-3.448v-5.425h-6.434v5.425a3.458 3.458 0 0 1-3.46 3.448h-4.45a3.458 3.458 0 0 1-3.46-3.448v-9.523l-.283-.289a14.464 14.464 0 0 1-4-8.076l-.122-.848h-21.067c-6.684 0-12.12 5.418-12.12 12.08v31.058c0 6.663 5.436 12.081 12.12 12.081h1.234v22.184h37.591V141.38h-16.57c-3.133 0-5.685-2.544-5.685-5.667v-5.667h4.451v-.988c0-3.685 2.574-6.867 6.135-7.685l.604-.138.14-.603a7.92 7.92 0 0 1 7.708-6.115c1.373 0 2.707.38 3.936 1.091l.497.288.497-.287c1.923-1.108 4.227-1.388 6.272-.735l.58.185.427-.432a7.85 7.85 0 0 1 5.596-2.328c2.123 0 4.127.845 5.614 2.35l.421.426.575-.175c.835-.254 1.57-.383 2.292-.383a7.92 7.92 0 0 1 7.709 6.115l.139.603.604.138c3.56.818 6.135 4 6.135 7.685v.988zm-7.91-6.414h-1.235v-1.23c0-2.992-2.44-5.425-5.442-5.425a5.445 5.445 0 0 0-5.352 4.437h-2.495c.208-1.6.916-3.09 2.027-4.304l.8-.873-1.004-.63a5.398 5.398 0 0 0-2.878-.848 5.422 5.422 0 0 0-4.588 2.536l-.63.991-1.022-.58c-1.249-.706-2.665-.855-4.043-.495l-1.229.322.612 1.11c.657 1.193 1.006 2.46 1.006 3.76 0 .567-.06 1.129-.18 1.68l-2.355-.83c.044-.28.067-.565.067-.85 0-2.993-2.44-5.426-5.443-5.426-3.002 0-5.442 2.433-5.442 5.425v1.23h-1.234c-3.003 0-5.443 2.433-5.443 5.426v.988h50.945v-.988c0-2.993-2.44-5.426-5.443-5.426zM304.51 74.826c-5.588 0-10.136-4.533-10.136-10.104V57.08h-11.609l-12.63 12.59v8.364c0 .816.083 1.625.245 2.416l.162.79h50.131l.162-.79c.162-.79.245-1.6.245-2.416v-3.207h-16.57zm4.45 15.287c3.825 0 7.347-1.812 9.638-4.828l1.204-1.585h-48.385l1.202 1.585c2.289 3.015 5.81 4.828 9.635 4.828h26.707zm-34.374 8.874h6.434V92.53l-.85-.123a14.482 14.482 0 0 1-4.165-1.256l-1.419-.675v8.512zm24.239 0v-6.413h-6.435v6.413h6.435zm11.37 0h6.434v-8.512l-1.419.675a14.482 14.482 0 0 1-4.166 1.256l-.85.123v6.458zM321.08 69.16c0-6.662-5.436-12.08-12.12-12.08h-12.118v7.643c0 4.216 3.439 7.644 7.668 7.644h16.57V69.16zm-52.096-1.82l11.44-11.408-17.517-14.553-8.522 8.496 14.599 17.464zm-13.359-32.01l-7.307 7.286 4.481 5.363 8.206-8.18-5.38-4.47zm-31.235 30.623c-11.591 0-21.02 9.4-21.02 20.955v27.488l1.417-.674a14.514 14.514 0 0 1 6.25-1.423c8.042 0 14.587 6.524 14.587 14.54 0 8.016-6.545 14.54-14.587 14.54-2.173 0-4.287-.49-6.25-1.423l-1.418-.673v17.384h42.043v-19.75l-.85-.121c-7.128-1.022-12.503-7.15-12.503-14.394V91.344c0-8.016 6.545-14.541 14.587-14.541h21.021v-7.199l-3.053-3.652h-40.224zm-13.353 48.806c-6.683 0-12.119 5.418-12.119 12.08s5.436 12.08 12.12 12.08c6.683 0 12.118-5.418 12.118-12.08s-5.435-12.08-12.119-12.08zm92.239 43.138V141.38H287.94v14.299a3.458 3.458 0 0 1-3.46 3.448h-82.344a7.679 7.679 0 0 0-7.23 5.095l-.47 1.319H295.61c4.228 0 7.668-3.429 7.668-7.644zm22.255-22.184v-3.207h-59.847v3.207a3.214 3.214 0 0 0 3.217 3.207h53.413a3.214 3.214 0 0 0 3.217-3.207zm-114.494-3.207c-3.133 0-5.685-2.543-5.685-5.667 0-3.123 2.552-5.667 5.685-5.667 3.134 0 5.685 2.544 5.685 5.667 0 3.124-2.551 5.667-5.685 5.667zm0-8.874a3.214 3.214 0 0 0-3.217 3.207 3.214 3.214 0 0 0 3.217 3.207 3.214 3.214 0 0 0 3.217-3.207 3.214 3.214 0 0 0-3.217-3.207zm-1.234-17.747v-2.46h2.468v2.46h-2.468zm2.468-18.977V97.01h-2.468V86.907c0-8.016 6.545-14.54 14.587-14.54h3.46v2.46h-3.46c-6.683 0-12.119 5.418-12.119 12.08zm91.005-20.955v-2.46h2.468v2.46h-2.468zm8.902 0v-2.46h2.468v2.46h-2.468zm-75.668 84.3v-2.46h2.468v2.46h-2.468zm-8.902 0v-2.46h2.468v2.46h-2.468zm-8.903 0v-2.46h2.468v2.46h-2.468z"
                mask="url(#c)"/>
          <path fill="#FFF" fillRule="nonzero"
                d="M2 156c-29 0-47-21.165-47-56 0-35.496 18.22-56 47-56 27.854 0 46 20.43 46 56 0 34.688-17.927 56-46 56zm0-24c8.735 0 15-10.422 15-32 0-22.092-6.265-32-15-32-8.66 0-15 9.908-15 32 0 21.578 6.34 32 15 32zm84 21V74h-1L59 91V65l27-18h31v106H86z"
                mask="url(#c)" opacity=".3"/>
        </g>
      </svg>
    </div>
  )
}

export { Performance1 }