import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.28632 0.708333H10.7137C12.2451 0.70832 13.4582 0.70831 14.4075 0.835946C15.3845 0.967302 16.1753 1.24407 16.799 1.8677C17.4226 2.49134 17.6994 3.28213 17.8307 4.25915C17.9584 5.20849 17.9583 6.42152 17.9583 7.95299V8.04701C17.9583 9.57848 17.9584 10.7915 17.8307 11.7409C17.6994 12.7179 17.4226 13.5087 16.799 14.1323C16.1753 14.7559 15.3845 15.0327 14.4075 15.1641C13.4582 15.2917 12.2451 15.2917 10.7137 15.2917H7.28632C5.75486 15.2917 4.54183 15.2917 3.59248 15.1641C2.61546 15.0327 1.82467 14.7559 1.20104 14.1323C0.5774 13.5087 0.300636 12.7179 0.169279 11.7409C0.0416428 10.7915 0.0416533 9.57848 0.0416665 8.04701V7.95299C0.0416533 6.42152 0.0416428 5.20849 0.169279 4.25915C0.300636 3.28213 0.5774 2.49134 1.20104 1.8677C1.82467 1.24407 2.61546 0.967302 3.59248 0.835946C4.54183 0.70831 5.75485 0.70832 7.28632 0.708333ZM3.75904 2.0748C2.92063 2.18752 2.43759 2.39891 2.08492 2.75159C1.73224 3.10426 1.52085 3.5873 1.40813 4.42571C1.29299 5.28209 1.29167 6.41098 1.29167 8C1.29167 9.58902 1.29299 10.7179 1.40813 11.5743C1.52085 12.4127 1.73224 12.8957 2.08492 13.2484C2.43759 13.6011 2.92063 13.8125 3.75904 13.9252C4.61543 14.0403 5.74432 14.0417 7.33333 14.0417H10.6667C12.2557 14.0417 13.3846 14.0403 14.241 13.9252C15.0794 13.8125 15.5624 13.6011 15.9151 13.2484C16.2678 12.8957 16.4791 12.4127 16.5919 11.5743C16.707 10.7179 16.7083 9.58902 16.7083 8C16.7083 6.41098 16.707 5.28209 16.5919 4.42571C16.4791 3.5873 16.2678 3.10426 15.9151 2.75159C15.5624 2.39891 15.0794 2.18752 14.241 2.0748C13.3846 1.95966 12.2557 1.95833 10.6667 1.95833H7.33333C5.74432 1.95833 4.61543 1.95966 3.75904 2.0748ZM3.51986 4.26655C3.74084 4.00138 4.13494 3.96555 4.40011 4.18653L6.19919 5.68576C6.97666 6.33365 7.51644 6.78201 7.97215 7.07511C8.41328 7.35883 8.71244 7.45406 9 7.45406C9.28756 7.45406 9.58671 7.35883 10.0278 7.07511C10.4836 6.78201 11.0233 6.33365 11.8008 5.68576L13.5999 4.18653C13.8651 3.96555 14.2592 4.00138 14.4801 4.26655C14.7011 4.53172 14.6653 4.92583 14.4001 5.14681L12.5697 6.67215C11.8311 7.28769 11.2324 7.7866 10.704 8.12644C10.1536 8.48044 9.61756 8.70406 9 8.70406C8.38244 8.70406 7.84639 8.48044 7.29598 8.12644C6.7676 7.7866 6.16893 7.2877 5.4303 6.67215L3.59988 5.14681C3.33471 4.92583 3.29888 4.53172 3.51986 4.26655Z'
      fill='#121212'
      fillOpacity={0.6}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
