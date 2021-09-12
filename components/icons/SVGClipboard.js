import * as React from "react";

export default function SVGClipBoard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      width={30}
    >
      <path
        d="M385.984 512H126.016c-32.423 0-58.802-26.378-58.802-58.802V147.531c0-32.424 26.379-58.802 58.802-58.802h259.968c32.423 0 58.802 26.378 58.802 58.802v305.667c0 32.424-26.378 58.802-58.802 58.802zM126.016 115.995c-17.39 0-31.536 14.147-31.536 31.536v305.667c0 17.388 14.147 31.536 31.536 31.536h259.968c17.39 0 31.536-14.147 31.536-31.536V147.531c0-17.388-14.147-31.536-31.536-31.536H126.016z"
        fill={props.color ?? "#11544f"}
      />
      <path
        d="M324.645 61.705h-19.557c-.556-26.642-22.311-48.073-49.087-48.073s-48.532 21.431-49.087 48.073h-19.557c-22.454 0-40.657 18.202-40.657 40.657 0 22.454 18.202 40.657 40.657 40.657h137.29c22.454 0 40.657-18.202 40.657-40.657-.002-22.454-18.205-40.657-40.659-40.657z"
        fill={props.color ?? "#6ab797"}
      />
      <g fill={props.color ?? "#11544f"}>
        <path d="M324.645 156.653h-137.29c-29.936 0-54.289-24.355-54.289-54.289s24.353-54.289 54.289-54.289h7.668C201.707 20.602 226.707 0 256.001 0s54.292 20.602 60.977 48.073h7.668c29.936 0 54.289 24.355 54.289 54.289s-24.354 54.291-54.29 54.291zm-137.29-81.315c-14.902 0-27.024 12.124-27.024 27.024s12.122 27.025 27.024 27.025h137.29c14.902 0 27.024-12.124 27.024-27.024s-12.124-27.024-27.024-27.024h-19.559c-7.418 0-13.476-5.932-13.63-13.349-.398-19.148-16.305-34.725-35.456-34.725s-35.059 15.577-35.457 34.725c-.154 7.416-6.212 13.349-13.63 13.349h-19.559v-.001zM342.67 238.164H169.331c-7.528 0-13.633-6.103-13.633-13.633 0-7.529 6.105-13.633 13.633-13.633H342.67c7.528 0 13.633 6.103 13.633 13.633 0 7.529-6.105 13.633-13.633 13.633zM342.67 324.835H169.331c-7.528 0-13.633-6.103-13.633-13.633s6.105-13.633 13.633-13.633H342.67c7.528 0 13.633 6.103 13.633 13.633s-6.105 13.633-13.633 13.633zM342.67 411.507H169.331c-7.528 0-13.633-6.103-13.633-13.633s6.105-13.633 13.633-13.633H342.67c7.528 0 13.633 6.103 13.633 13.633s-6.105 13.633-13.633 13.633z" />
      </g>
    </svg>
  );
}
