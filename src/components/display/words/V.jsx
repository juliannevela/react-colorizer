import React from 'react';

const V = ({ color }) => {
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
            d="m323.317 482.464c-1.285 4.242-2.828 7.712-4.884 10.282-2.057 2.699-5.27 4.627-9.768 6.041s-10.668 2.314-18.508 2.699c-7.711.385-17.865.514-30.461.514-10.025 0-18.636 0-25.834-.128-7.197-.129-13.238-.514-18.251-1.028s-9.125-1.285-12.21-2.185c-3.213-1.028-5.784-2.313-7.968-3.856-2.056-1.414-3.728-3.342-4.884-5.398-1.157-2.185-2.185-4.884-3.213-8.097l-144.849-432.107c-2.956-9.125-4.884-16.194-5.398-21.464-.643-5.27.514-9.254 3.727-11.953 3.085-2.57 8.483-4.241 15.937-4.884 7.583-.643 18.122-.9 31.746-.9 11.568 0 20.564.257 27.119.771s11.567 1.414 15.038 2.57c3.47 1.285 6.041 3.213 7.326 5.655 1.414 2.57 2.699 5.655 3.985 9.511l118.373 375.94h.385l116.445-374.14c1.028-4.241 2.314-7.711 3.728-10.282 1.542-2.699 4.113-4.756 7.84-6.298 3.599-1.414 8.868-2.442 15.68-2.956 6.684-.514 16.066-.771 27.89-.771 11.567 0 20.564.385 26.991 1.157 6.426.771 10.796 2.57 13.238 5.398 2.314 2.956 3.085 7.069 2.185 12.339-.771 5.269-2.827 12.21-5.784 21.078z"
            fill={color}
            fillRule="evenodd"
          />
          <g>
            <path d="m480.411 10.391c-.099-.126-.201-.25-.306-.371-4.173-4.833-10.589-7.709-19.616-8.792-6.886-.827-16.104-1.228-28.181-1.228-12.105 0-21.747.269-28.644.799-7.694.581-13.946 1.799-18.583 3.62-.056.022-.112.044-.167.067-5.784 2.394-10.057 5.952-12.699 10.577-.027.047-.053.094-.08.142-1.851 3.364-3.399 7.543-4.605 12.424l-107.052 343.963-45.049-143.069c-1.659-5.268-7.276-8.192-12.542-6.535-5.268 1.659-8.194 7.274-6.535 12.542l54.449 172.922c1.312 4.164 5.173 6.997 9.539 6.997h.386c4.378 0 8.247-2.848 9.548-7.028l116.444-374.142c.063-.203.12-.409.17-.615 1.019-4.203 2.122-6.615 2.72-7.724.496-.808 1.81-1.492 2.868-1.937 1.61-.62 5.347-1.706 12.708-2.261 6.402-.492 15.528-.742 27.124-.742 11.116 0 19.795.365 25.799 1.085 4.464.536 6.194 1.515 6.693 1.871.302.674.423 2.152.064 4.255-.013.078-.026.155-.037.233-.745 5.086-3.136 12.644-5.367 19.336l-145.62 432.493c-.033.097-.063.193-.093.291-.981 3.238-2.032 5.572-3.123 6.936-.049.061-.097.123-.144.185-.678.89-2.388 1.8-4.812 2.563-3.667 1.152-9.05 1.909-16.01 2.251-6.936.347-16.176.502-29.961.502-9.952 0-18.547 0-25.654-.127-6.327-.113-12.186-.442-17.41-.978-5.151-.528-8.431-1.264-10.304-1.801-2.046-.665-3.724-1.471-5.125-2.46-.035-.025-.07-.049-.105-.073-.671-.461-1.314-1.173-1.777-1.963-.759-1.463-1.564-3.539-2.459-6.337-.014-.044-.029-.088-.043-.132l-144.836-432.06c-2.042-6.309-4.443-14.188-4.943-19.305-.008-.08-.017-.16-.026-.239-.188-1.543-.092-2.813.203-3.06.849-.708 3.993-2.052 10.379-2.603 6.959-.589 16.778-.863 30.902-.863 11.207 0 20.068.249 26.337.74 7.039.552 10.804 1.49 12.495 2.035 1.111.428 1.693.849 1.881 1.027.002.004.005.009.007.013 1.088 1.979 2.146 4.525 3.235 7.781l36.861 117.067c1.659 5.268 7.274 8.193 12.542 6.535 5.268-1.659 8.194-7.274 6.535-12.542l-36.887-117.151c-.017-.053-.034-.106-.052-.159-1.493-4.479-2.979-8.01-4.672-11.101-2.436-4.563-6.808-8.117-12.653-10.282-.103-.038-.207-.074-.311-.109-4.392-1.464-10.252-2.491-17.418-3.053-6.883-.539-16.009-.801-27.9-.801-14.7 0-25.056.297-32.605.937-9.668.834-16.694 3.178-21.51 7.19-4.024 3.381-8.538 9.714-7.236 20.702.557 5.55 2.303 12.578 5.825 23.454.011.033.021.065.032.097l144.83 432.046c1.295 4.041 2.528 7.112 3.877 9.659.04.075.08.148.122.222 1.958 3.48 4.682 6.487 7.881 8.699 3.107 2.187 6.588 3.88 10.64 5.177.082.026.165.051.247.075 3.852 1.124 8.558 1.976 13.991 2.533 5.782.593 12.206.956 19.093 1.079 7.286.13 15.964.13 26.012.13 14.13 0 23.679-.163 30.951-.526 8.775-.431 15.649-1.46 21.018-3.147 6.559-2.063 11.352-5.146 14.647-9.422 2.704-3.409 4.782-7.67 6.528-13.389l145.583-432.381c3.59-10.77 5.384-17.356 6.175-22.679 1.676-10.015-1.349-16.436-4.189-20.065z" />
            <path d="m182.37 188.594c0 5.523 4.48 10 10.003 10s10-4.477 10-10-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10z" />
          </g>
        </g>
      </svg>
    </>
  );
};

export default V;
