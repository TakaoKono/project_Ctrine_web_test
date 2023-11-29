'use client';
import React from 'react';

type Props = {
    fill: string;
};

const User = ({ fill }: Props) => {
    return (
        <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="login_icon-pc">
                <rect
                    id="Rectangle 98"
                    x="0.5"
                    y="0.5"
                    width="41"
                    height="41"
                    rx="4.5"
                    fill={fill}
                    stroke="#C0C0C0"
                />
                <path
                    id="Rectangle 99"
                    d="M9 37C9 31.4772 13.4772 27 19 27H23C28.5228 27 33 31.4772 33 37V41H9V37Z"
                    fill="white"
                />
                <circle id="Ellipse 7" cx="21" cy="17" r="8" fill="white" />
            </g>
        </svg>
    );
};

export default User;
