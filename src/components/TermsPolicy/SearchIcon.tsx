import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 18L13.65 13.65M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 2.38419e-07 12.4183 2.38419e-07 8C2.38419e-07 3.58172 3.58172 2.38419e-07 8 2.38419e-07C12.4183 2.38419e-07 16 3.58172 16 8Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
