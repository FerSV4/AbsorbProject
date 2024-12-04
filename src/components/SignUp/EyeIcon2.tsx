import { memo, SVGProps } from 'react';

const EyeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.833333 7C0.833333 7 4.16667 0.333333 10 0.333333C15.8333 0.333333 19.1667 7 19.1667 7C19.1667 7 15.8333 13.6667 10 13.6667C4.16667 13.6667 0.833333 7 0.833333 7Z'
      stroke='black'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 9.5C11.3807 9.5 12.5 8.38071 12.5 7C12.5 5.61929 11.3807 4.5 10 4.5C8.61929 4.5 7.5 5.61929 7.5 7C7.5 8.38071 8.61929 9.5 10 9.5Z'
      stroke='black'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(EyeIcon2);
export { Memo as EyeIcon2 };
