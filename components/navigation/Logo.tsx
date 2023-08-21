const Logo = () => (
  <svg
    id="portfolio-logo"
    data-name="portfolio-logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 0 70 60"
  >
    <g>
      <defs>
        <linearGradient
          id="linear"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop
            offset="40%"
            stopColor="#53d670"
          />
          <stop
            offset="55%"
            stopColor="#fff"
          />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          stroke="url(#linear)"
          strokeWidth={3}
          d="m2.07,55.75c-.75,0-1.27-.75-1-1.45L18.81,7.07q3.34-8.03,6.14-.37l9.92,28.12c2.02,5.29,4.09,5.39,5.86,0l6.32-17.1c3.19-8.84,3.19-8.43,5.76.34l11.33,36.47c.19.61-.27,1.23-.91,1.23H2.07Z"
        />
        <path
          stroke="#fff"
          strokeWidth={2}
          d="m12.54,25.31c0,1.14,1.26,2.06,2.81,2.06s1.73-2.06,3.03-2.06h0c1.47,0,1.78,2.06,3.36,2.06s2.63-2.06,3.42-2.06h0c1.31,0,1.46,2.06,3.04,2.06s2.87-.92,2.87-2.06"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
