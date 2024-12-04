import { memo, SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5833 4.14583H13.5917M4.83333 0.583333H13.1667C15.4679 0.583333 17.3333 2.35554 17.3333 4.54167V12.4583C17.3333 14.6445 15.4679 16.4167 13.1667 16.4167H4.83333C2.53215 16.4167 0.666667 14.6445 0.666667 12.4583V4.54167C0.666667 2.35554 2.53215 0.583333 4.83333 0.583333ZM12.3333 8.00125C12.4362 8.66011 12.3177 9.333 11.9948 9.92422C11.6719 10.5154 11.161 10.9949 10.5347 11.2943C9.90842 11.5938 9.19871 11.698 8.50649 11.5922C7.81427 11.4864 7.1748 11.1759 6.67903 10.7049C6.18326 10.2339 5.85644 9.62644 5.74506 8.96884C5.63367 8.31123 5.74339 7.637 6.05861 7.04205C6.37382 6.44709 6.87849 5.96171 7.50082 5.65494C8.12315 5.34817 8.83146 5.23563 9.525 5.33333C10.2324 5.43299 10.8874 5.74616 11.3931 6.22658C11.8988 6.70699 12.2284 7.32919 12.3333 8.00125Z'
      stroke='#F5F5F5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(InstagramIcon);
export { Memo as InstagramIcon };
