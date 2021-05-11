import React from 'react';

const E = ({ color }) => {
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
            d="m401.576 462.687c0 7.395-.26 13.493-.908 18.554-.649 4.93-1.557 8.952-2.855 11.937-1.297 3.114-2.854 5.319-4.801 6.747-1.816 1.427-4.022 2.076-6.228 2.076h-246.778c-8.304 0-15.31-2.465-21.019-7.396-5.709-4.93-8.563-12.975-8.563-24.133v-428.943c0-11.158 2.854-19.203 8.563-24.133s12.715-7.395 21.019-7.395h245.611c2.205 0 4.282.648 6.098 1.946 1.687 1.298 3.244 3.503 4.541 6.617 1.167 3.244 2.206 7.266 2.854 12.196.648 5.06.908 11.288.908 18.943 0 7.136-.26 13.104-.908 18.165-.649 4.93-1.557 8.952-2.854 11.936-1.298 3.114-2.855 5.32-4.541 6.747-1.816 1.427-3.893 2.076-6.098 2.076h-175.547v119.886h147.911c2.335 0 4.411.648 6.228 2.076 1.946 1.428 3.503 3.503 4.801 6.487 1.298 2.855 2.206 6.747 2.854 11.807.649 4.93.909 10.899.909 17.905 0 7.395-.26 13.494-.909 18.294-.649 4.801-1.557 8.693-2.854 11.547-1.297 2.984-2.854 5.06-4.801 6.228-1.816 1.297-3.892 1.946-6.228 1.946h-147.911v138.57h176.715c2.335 0 4.412.649 6.228 2.076 1.946 1.427 3.503 3.633 4.801 6.747 1.298 2.984 2.206 7.006 2.855 11.937.647 5.06.907 11.158.907 18.554z"
            fill={color}
            fillRule="evenodd"
          />
          <g>
            <path d="m410.583 442.829c-.812-6.165-1.945-10.792-3.568-14.55-1.994-4.757-4.598-8.291-7.955-10.795-3.483-2.689-7.724-4.11-12.274-4.11h-166.719l-.002-14.287c-.001-5.523-4.479-10-10.002-9.999-5.522.001-9.999 4.479-9.998 10.001l.004 24.285c.001 5.522 4.478 9.999 10 9.999h176.716c.055 0 .099.002.133.004.061.046.12.091.182.136.006.005.628.478 1.483 2.53.02.046.039.092.059.138.585 1.346 1.426 4.044 2.107 9.223.564 4.403.827 9.895.827 17.283s-.263 12.879-.823 17.25c-.686 5.211-1.526 7.909-2.11 9.254-.021.046-.04.093-.06.14-.855 2.052-1.478 2.525-1.483 2.53-.06.043-.117.086-.175.131-.031.004-.077.009-.14.009h-246.778c-5.878 0-10.615-1.624-14.483-4.964-3.384-2.922-5.1-8.496-5.1-16.565v-428.943c0-8.069 1.716-13.643 5.1-16.565 3.868-3.34 8.605-4.964 14.483-4.964h245.61c.04 0 .072.001.1.004.227.285.678.939 1.218 2.188 1.021 2.903 1.781 6.222 2.257 9.838.564 4.408.828 10.023.828 17.672 0 7.117-.264 12.485-.824 16.86-.686 5.214-1.525 7.911-2.109 9.255-.021.046-.04.092-.06.139-.621 1.491-1.177 2.289-1.495 2.67h-175.463c-5.522 0-10 4.477-10 10v119.886c0 5.523 4.478 10 10 10h147.911c.056 0 .1.002.134.004.061.046.12.091.181.136.469.344 1.017 1.199 1.543 2.409.021.051.045.103.067.153.567 1.248 1.382 3.812 2.044 8.972.554 4.209.823 9.64.823 16.601 0 7.333-.268 12.88-.818 16.954-.675 4.991-1.486 7.513-2.049 8.749-.022.051-.046.103-.068.154-.479 1.104-.841 1.601-.972 1.761-.159.101-.316.207-.47.316-.064.046-.116.083-.415.083h-147.911c-5.522 0-10 4.477-10 10v24.285c0 5.523 4.478 10 10 10s10-4.477 10-10v-14.285h137.911c4.321 0 8.265-1.208 11.728-3.589 3.564-2.249 6.328-5.696 8.438-10.522 1.653-3.664 2.807-8.201 3.628-14.271.681-5.042.998-11.28.998-19.633 0-7.843-.325-14.126-.989-19.178-.8-6.229-1.955-10.871-3.636-14.595-1.969-4.503-4.553-7.905-7.893-10.393-3.529-2.727-7.658-4.109-12.274-4.109h-137.911v-99.888h165.548c4.524 0 8.77-1.457 12.277-4.214.095-.074.188-.15.279-.227 2.979-2.521 5.431-6.042 7.284-10.464 1.622-3.756 2.756-8.383 3.571-14.583.676-5.272.99-11.448.99-19.436 0-8.519-.314-14.942-.994-20.247-.68-5.169-1.81-9.973-3.358-14.278-.057-.156-.116-.31-.18-.462-1.95-4.679-4.532-8.277-7.674-10.695-.094-.072-.189-.143-.286-.212-3.487-2.491-7.605-3.808-11.909-3.808h-245.61c-10.733 0-20.005 3.306-27.556 9.827-7.98 6.892-12.027 17.558-12.027 31.702v428.942c0 14.143 4.047 24.809 12.027 31.702 7.551 6.521 16.822 9.827 27.556 9.827h246.778c4.551 0 8.791-1.42 12.274-4.11 3.359-2.505 5.963-6.041 7.958-10.802 1.621-3.757 2.755-8.382 3.569-14.577.675-5.267.989-11.566.989-19.825s-.313-14.557-.992-19.857z" />
            <path d="m210.069 344.088h-.007c-5.522 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z" />
          </g>
        </g>
      </svg>
    </>
  );
};

export default E;