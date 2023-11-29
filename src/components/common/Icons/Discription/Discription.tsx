'use client';
import React from 'react';

type Props = {
    fill: string;
};

const Discription = ({ fill }: Props) => {
    return (
        <svg
            width="30"
            height="8"
            viewBox="0 0 30 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="Vector"
                d="M3.75 7.5C2.71875 7.5 1.83594 7.13281 1.10156 6.39844C0.367188 5.66406 0 4.78125 0 3.75C0 2.71875 0.367188 1.83594 1.10156 1.10156C1.83594 0.367188 2.71875 0 3.75 0C4.78125 0 5.66406 0.367188 6.39844 1.10156C7.13281 1.83594 7.5 2.71875 7.5 3.75C7.5 4.78125 7.13281 5.66406 6.39844 6.39844C5.66406 7.13281 4.78125 7.5 3.75 7.5ZM15 7.5C13.9688 7.5 13.0859 7.13281 12.3516 6.39844C11.6172 5.66406 11.25 4.78125 11.25 3.75C11.25 2.71875 11.6172 1.83594 12.3516 1.10156C13.0859 0.367188 13.9688 0 15 0C16.0312 0 16.9141 0.367188 17.6484 1.10156C18.3828 1.83594 18.75 2.71875 18.75 3.75C18.75 4.78125 18.3828 5.66406 17.6484 6.39844C16.9141 7.13281 16.0312 7.5 15 7.5ZM26.25 7.5C25.2188 7.5 24.3359 7.13281 23.6016 6.39844C22.8672 5.66406 22.5 4.78125 22.5 3.75C22.5 2.71875 22.8672 1.83594 23.6016 1.10156C24.3359 0.367188 25.2188 0 26.25 0C27.2812 0 28.1641 0.367188 28.8984 1.10156C29.6328 1.83594 30 2.71875 30 3.75C30 4.78125 29.6328 5.66406 28.8984 6.39844C28.1641 7.13281 27.2812 7.5 26.25 7.5Z"
                fill={fill}
            />
        </svg>
    );
};

export default Discription;