import { memo, SVGProps } from 'react';

const Size20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.1667 0.5C18.3687 1.0629 17.4851 1.49342 16.55 1.775C16.0481 1.19793 15.3811 0.78891 14.6392 0.603272C13.8973 0.417634 13.1162 0.46433 12.4017 0.737045C11.6872 1.00976 11.0737 1.49533 10.6442 2.1281C10.2146 2.76086 9.98975 3.51028 10 4.275V5.10833C8.53553 5.14631 7.08439 4.82151 5.77584 4.16287C4.46729 3.50423 3.34193 2.5322 2.5 1.33333C2.5 1.33333 -0.833332 8.83333 6.66667 12.1667C4.95044 13.3316 2.90596 13.9158 0.833334 13.8333C8.33333 18 17.5 13.8333 17.5 4.25C17.4992 4.01788 17.4769 3.78633 17.4333 3.55833C18.2838 2.71958 18.884 1.66059 19.1667 0.5Z'
      stroke='#1E1E1E'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size20Icon);
export { Memo as Size20Icon };
