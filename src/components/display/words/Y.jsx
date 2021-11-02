import React from 'react';

const Y = ({ color }) => {
  return (
    <>
      <svg
        id="Layer_1"
        enableBackground="new 0 0 512 512"
        height="150"
        viewBox="0 0 512 512"
        width="150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            clipRule="evenodd"
            d="m305.807 314.736v171.455c0 2.442-.771 4.756-2.442 6.812-1.671 1.928-4.37 3.599-8.097 4.884-3.727 1.157-8.868 2.185-15.295 2.956-6.426.771-14.395 1.157-23.906 1.157-9.768 0-17.865-.385-24.163-1.157-6.169-.771-11.311-1.799-15.166-2.956-3.984-1.285-6.683-2.956-8.097-4.884-1.542-2.056-2.314-4.37-2.314-6.812v-171.455l-133.411-265.535c-4.755-9.254-7.84-16.58-9.254-21.721s-.643-8.997 2.313-11.696c2.828-2.57 8.226-4.241 15.938-4.884s18.508-.9 32.261-.9c11.567 0 20.693.257 27.633.771s12.338 1.414 16.323 2.828c3.984 1.414 6.941 3.213 8.868 5.398 1.799 2.313 3.599 5.141 5.398 8.74l54.495 119.787c5.27 11.567 10.539 23.777 15.68 36.502 5.27 12.852 10.411 26.219 15.809 40.357h.771c4.755-13.624 9.639-26.733 14.652-39.586s9.897-24.934 14.652-36.502l53.595-119.015c1.286-4.113 2.828-7.326 4.755-9.64 1.799-2.442 4.627-4.37 8.483-5.912 3.727-1.414 8.868-2.442 15.423-2.956 6.428-.515 15.168-.772 25.964-.772 14.266 0 25.448.257 33.288.899 7.969.643 13.367 2.314 16.195 4.884 2.956 2.699 3.599 6.683 2.056 11.953-1.414 5.27-4.498 12.339-8.997 21.464z"
            fill={color}
            fillRule="evenodd"
          />
          <g>
            <path d="m452.884 8.384c-4.604-4.185-11.838-6.623-22.104-7.452-7.771-.636-18.608-.932-34.105-.932-11.092 0-20.095.27-26.745.802-7.329.575-13.448 1.778-18.188 3.575-.056.021-.111.043-.167.065-5.599 2.24-9.736 5.192-12.637 9.021-2.546 3.126-4.593 7.137-6.242 12.234l-53.359 118.491c-.045.1-.089.202-.131.303-5.554 13.51-10.231 25.162-14.72 36.671-2.079 5.331-4.075 10.548-6.005 15.696-2.193-5.591-4.4-11.12-6.639-16.58-4.992-12.354-10.325-24.77-15.85-36.896l-54.493-119.786c-.051-.111-.104-.221-.158-.33-1.992-3.986-4.102-7.391-6.45-10.409-.126-.163-.258-.321-.394-.476-3.1-3.513-7.359-6.197-13.022-8.207-4.797-1.702-10.812-2.775-18.929-3.376-7.258-.537-16.539-.798-28.373-.798-14.923 0-25.437.297-33.09.934-10.104.842-17.246 3.279-21.85 7.465-3.34 3.05-8.458 9.928-5.213 21.734 1.642 5.965 5.007 13.918 9.961 23.557l46.5 92.553c2.479 4.935 8.489 6.927 13.425 4.446 4.936-2.479 6.926-8.49 4.446-13.425l-46.541-92.634c-5.44-10.586-7.63-16.613-8.507-19.801-.247-.899-.313-1.484-.326-1.817.804-.454 3.419-1.618 9.766-2.147 6.989-.582 17.27-.865 31.43-.865 11.179 0 20.228.25 26.895.744 6.117.453 10.731 1.22 13.718 2.28 2.837 1.007 4.075 1.953 4.563 2.433 1.408 1.858 2.728 4.021 4.023 6.595l54.418 119.618c5.407 11.869 10.625 24.016 15.528 36.149 5.321 12.979 10.472 26.389 15.72 40.131 1.479 3.874 5.195 6.433 9.342 6.433h.771c4.253 0 8.04-2.689 9.441-6.705 4.473-12.816 9.225-25.654 14.526-39.248 4.427-11.349 9.043-22.851 14.521-36.179l53.53-118.866c.165-.366.308-.741.427-1.124 1.136-3.635 2.2-5.389 2.893-6.22.128-.153.251-.311.369-.471.28-.38 1.234-1.382 4.06-2.524 2.059-.77 5.896-1.782 12.592-2.307 6.135-.49 14.602-.739 25.164-.739 14.734 0 25.356.283 32.483.867 6.229.502 8.933 1.587 9.857 2.066-.026.388-.118 1.034-.399 1.996-.021.072-.041.144-.061.216-1.118 4.166-3.758 10.404-8.274 19.566l-133.41 265.536c-.7 1.393-1.064 2.93-1.064 4.489v171.455c0 .135 0 .213-.092.355-.279.259-1.23 1.015-3.564 1.836-2.321.708-6.495 1.707-13.369 2.532-6.004.72-13.646 1.085-22.715 1.085-9.359 0-17.08-.364-22.923-1.08-6.741-.842-11.012-1.863-13.431-2.582-2.044-.668-2.91-1.255-3.142-1.431-.225-.329-.245-.534-.245-.716v-171.454c0-1.559-.364-3.096-1.064-4.489l-46.499-92.55c-2.479-4.935-8.488-6.925-13.425-4.446-4.936 2.479-6.926 8.49-4.446 13.425l45.435 90.432v169.084c0 4.605 1.482 9.022 4.288 12.778 2.722 3.681 7.112 6.519 13.054 8.435.064.021.13.042.195.061 4.556 1.367 10.208 2.478 16.825 3.304 6.671.817 15.21 1.231 25.378 1.231 9.861 0 18.306-.413 25.098-1.228 6.84-.821 12.582-1.942 17.067-3.334.099-.031.197-.063.295-.097 5.342-1.842 9.512-4.462 12.395-7.788.069-.08.138-.161.204-.243 3.063-3.769 4.682-8.305 4.682-13.118v-169.086l132.378-263.484c5.252-10.651 8.146-17.598 9.659-23.19 3.484-12.058-1.597-18.978-4.961-22.049z" />
            <path d="m139.628 171.968h-.007c-5.522 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z" />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Y;
