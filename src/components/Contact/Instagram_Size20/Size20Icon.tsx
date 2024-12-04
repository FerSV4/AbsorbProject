import { memo, SVGProps } from 'react';

const Size20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5833 4.41667H13.5917M4.83333 0.666667H13.1667C15.4679 0.666667 17.3333 2.53215 17.3333 4.83333V13.1667C17.3333 15.4679 15.4679 17.3333 13.1667 17.3333H4.83333C2.53215 17.3333 0.666667 15.4679 0.666667 13.1667V4.83333C0.666667 2.53215 2.53215 0.666667 4.83333 0.666667ZM12.3333 8.475C12.4362 9.16854 12.3177 9.87685 11.9948 10.4992C11.6719 11.1215 11.161 11.6262 10.5347 11.9414C9.90842 12.2566 9.19871 12.3663 8.50649 12.2549C7.81427 12.1436 7.1748 11.8167 6.67903 11.321C6.18326 10.8252 5.85644 10.1857 5.74506 9.49351C5.63367 8.80129 5.74339 8.09158 6.05861 7.46531C6.37382 6.83905 6.87849 6.32812 7.50082 6.0052C8.12315 5.68229 8.83146 5.56382 9.525 5.66667C10.2324 5.77157 10.8874 6.10122 11.3931 6.60692C11.8988 7.11263 12.2284 7.76756 12.3333 8.475Z'
      stroke='#1E1E1E'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size20Icon);
export { Memo as Size20Icon };
