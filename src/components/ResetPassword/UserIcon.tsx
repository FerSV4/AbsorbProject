import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.3333 17.25V15.4167C15.3333 14.4442 14.947 13.5116 14.2594 12.8239C13.5718 12.1363 12.6391 11.75 11.6667 11.75H4.33333C3.36087 11.75 2.42824 12.1363 1.74061 12.8239C1.05298 13.5116 0.666667 14.4442 0.666667 15.4167V17.25M11.6667 4.41667C11.6667 6.44171 10.025 8.08333 8 8.08333C5.97496 8.08333 4.33333 6.44171 4.33333 4.41667C4.33333 2.39162 5.97496 0.75 8 0.75C10.025 0.75 11.6667 2.39162 11.6667 4.41667Z'
      stroke='#F5F5F5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UserIcon);
export { Memo as UserIcon };
