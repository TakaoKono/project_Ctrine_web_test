'use client';
import React from 'react';

type Props = {
    fill: string;
};

const ArrowRight = ({ fill }: Props) => {
    return (
        <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="arrow_right"
                d="M4.97297 7L0 1.63333L1.51351 0L8 7L1.51351 14L0 12.3667L4.97297 7Z"
                fill={fill}
            />
        </svg>
    );
};

export default ArrowRight;
