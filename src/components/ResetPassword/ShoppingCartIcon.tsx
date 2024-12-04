import { memo, SVGProps } from 'react';

const ShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.833334 0.833334H4.16667L6.4 11.9917C6.4762 12.3753 6.68492 12.72 6.98962 12.9652C7.29432 13.2105 7.67558 13.3408 8.06667 13.3333H16.1667C16.5578 13.3408 16.939 13.2105 17.2437 12.9652C17.5484 12.72 17.7571 12.3753 17.8333 11.9917L19.1667 5H5M8.33333 17.5C8.33333 17.9602 7.96024 18.3333 7.5 18.3333C7.03976 18.3333 6.66667 17.9602 6.66667 17.5C6.66667 17.0398 7.03976 16.6667 7.5 16.6667C7.96024 16.6667 8.33333 17.0398 8.33333 17.5ZM17.5 17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5C15.8333 17.0398 16.2064 16.6667 16.6667 16.6667C17.1269 16.6667 17.5 17.0398 17.5 17.5Z'
      stroke='#F5F5F5'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ShoppingCartIcon);
export { Memo as ShoppingCartIcon };
