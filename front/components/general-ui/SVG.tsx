export const FoodSVG = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="24" fill="var(--primary-800)" />
    <path
      d="M19.5 34V24.85C18.65 24.6167 17.9375 24.15 17.3625 23.45C16.7875 22.75 16.5 21.9333 16.5 21V14H18.5V21H19.5V14H21.5V21H22.5V14H24.5V21C24.5 21.9333 24.2125 22.75 23.6375 23.45C23.0625 24.15 22.35 24.6167 21.5 24.85V34H19.5ZM29.5 34V26H26.5V19C26.5 17.6167 26.9875 16.4375 27.9625 15.4625C28.9375 14.4875 30.1167 14 31.5 14V34H29.5Z"
      fill="#33450D"
    />
  </svg>
);

export const RejectedSVG = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="24" fill="#E4E3DA" />
    <path
      d="M18.4 31L17 29.6L22.6 24L17 18.4L18.4 17L24 22.6L29.6 17L31 18.4L25.4 24L31 29.6L29.6 31L24 25.4L18.4 31Z"
      fill="#45483C"
    />
  </svg>
);


export const RegurgitationSVG = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="24" fill="var(--primary-800)"/>

  {/* <!-- Snake body --> */}
  <path d="M48 32 C42 32 38 30 36 26 C34 22 36 18 34 16 C32 14 28 15 26 18"
        fill="none" stroke="#33450D" stroke-width="4" stroke-linecap="round"/>

  {/* <!-- Snake upper jaw --> */}
  <ellipse cx="23" cy="17" rx="5" ry="3.5" fill="#33450D" transform="rotate(-30 23 17)"/>
  {/* <!-- Snake lower jaw --> */}
  <ellipse cx="21" cy="20" rx="3.5" ry="2" fill="#4a6318" transform="rotate(-30 21 20)"/>
  {/* <!-- Snake eye --> */}
  <circle cx="25" cy="15" r="1" fill="#D4ECA2"/>
  <circle cx="25" cy="15" r="0.45" fill="#000"/>
  {/* <!-- Forked tongue --> */}
  <path d="M18 19 L15 18.5 M15 18.5 L13.5 17 M15 18.5 L13.5 20"
        stroke="#E53935" stroke-width="0.9" stroke-linecap="round"/>

  {/* <!-- Rat body --> */}
  <ellipse cx="9" cy="13" rx="6" ry="4" fill="#888" transform="rotate(-30 9 13)"/>
  {/* <!-- Rat head --> */}
  <ellipse cx="4" cy="8" rx="3.5" ry="3" fill="#888" transform="rotate(-20 4 8)"/>
  {/* <!-- Ear outer --> */}
  <ellipse cx="3" cy="5.5" rx="1.5" ry="1.8" fill="#aaa"/>
  {/* <!-- Ear inner --> */}
  <ellipse cx="3" cy="5.5" rx="0.9" ry="1.1" fill="#e8b4b8"/>
  {/* <!-- Eye --> */}
  <circle cx="2.5" cy="7.5" r="0.8" fill="#111"/>
  <circle cx="2.2" cy="7.2" r="0.25" fill="white"/>
  {/* <!-- Nose --> */}
  <circle cx="1.2" cy="9" r="0.5" fill="#c97070"/>
  {/* <!-- Whiskers --> */}
  <line x1="1" y1="8.5" x2="-1.5" y2="7.5" stroke="#ccc" stroke-width="0.5"/>
  <line x1="1" y1="9" x2="-1.5" y2="9" stroke="#ccc" stroke-width="0.5"/>
  <line x1="1" y1="9.5" x2="-1.5" y2="10.5" stroke="#ccc" stroke-width="0.5"/>
  {/* <!-- Front legs --> */}
  <path d="M6 15 Q5 18 3 19" stroke="#777" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M8 16 Q8 19 6 21" stroke="#777" stroke-width="1.2" stroke-linecap="round"/>
  {/* <!-- Hind leg --> */}
  <path d="M13 15 Q15 17 14 20" stroke="#777" stroke-width="1.2" stroke-linecap="round"/>
  {/* <!-- Tail --> */}
  <path d="M15 14 Q20 12 22 15 Q23 17 21 18"
        stroke="#aaa" stroke-width="1.2" stroke-linecap="round"/>

  {/* <!-- Motion lines --> */}
  <line x1="10" y1="5" x2="7" y2="4" stroke="#33450D" stroke-width="0.8" stroke-linecap="round" opacity="0.3"/>
  <line x1="11" y1="7" x2="7" y2="6" stroke="#33450D" stroke-width="0.8" stroke-linecap="round" opacity="0.2"/>
  <line x1="9" y1="3" x2="6" y2="2.5" stroke="#33450D" stroke-width="0.7" stroke-linecap="round" opacity="0.2"/>
</svg>