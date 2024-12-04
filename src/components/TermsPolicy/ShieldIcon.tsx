import { memo, SVGProps } from 'react';

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M60 110C60 110 110 100 110 25.0001L60 10.0001L10 25.0001C10 105 60 110 60 110ZM60 15.2201L104.958 28.7076C103.518 91.0726 65.785 103.358 59.765 104.918C53.73 103.915 16.3825 95.0276 15.035 28.7076L60 15.2201Z'
      fill='black'
    />
    <path d='M78.535 44.9999L75 41.4649L55 61.4649L45 51.4649L41.465 54.9999L55 68.5349L78.535 44.9999Z' fill='black' />
  </svg>
);

const Memo = memo(ShieldIcon);
export { Memo as ShieldIcon };
