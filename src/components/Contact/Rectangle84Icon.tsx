import { memo, SVGProps } from 'react';

const Rectangle84Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1271 1080' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 28C0 12.536 12.536 0 28 0H1243C1258.46 0 1271 12.536 1271 28V1052C1271 1067.46 1258.46 1080 1243 1080H28C12.536 1080 0 1067.46 0 1052V28Z'
      fill='#FAFAFA'
      stroke='black'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Rectangle84Icon);
export { Memo as Rectangle84Icon };
