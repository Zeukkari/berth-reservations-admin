import React from 'react';

type Props = { className?: string };

export default ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" className={className}>
    <path d="M16.0534473,5.99010472 C15.9780639,5.99010472 15.9054984,5.99503635 15.832933,5.9971499 L15.832933,1 L12.5794665,1 C10.1474685,1 8.16918052,2.97969706 8.16918052,5.41169501 L8.16918052,5.99785442 C8.09450155,5.99574087 8.0240497,5.99010472 7.94725718,5.99010472 L1,5.99010472 L1,22.2017805 L7.94725718,22.2017805 C9.78393698,22.2017805 10.7470138,22.7844173 11.4705543,23.4297563 L11.9179236,23.8771256 L11.9284914,23.8658533 C11.952445,23.8898069 11.9763986,23.914465 11.9996477,23.9391232 C12.809844,23.1289269 13.7376949,22.2017805 16.0534473,22.2017805 L23,22.2017805 L23,5.99010472 L16.0534473,5.99010472 Z M10.0431998,5.41169501 C10.0431998,4.01252122 11.1809972,2.87401928 12.5794665,2.87401928 L13.9582092,2.87401928 L13.9582092,13.7376949 L12.578762,13.7376949 C11.6389343,13.7376949 10.7625132,14.0427515 10.0431998,14.5591635 L10.0431998,5.41169501 Z M10.0431998,18.1578442 C10.0579947,17.3335575 10.4588657,16.6015628 11.0626381,16.1351715 L11.0626381,20.3714414 L10.7843533,20.0938611 C10.3574151,19.6662183 10.0650399,18.9278829 10.0431998,18.2332277 L10.0431998,18.1578442 Z M2.87401928,20.3277612 L2.87401928,7.864124 L7.94725718,7.864124 C8.0240497,7.864124 8.09520607,7.86835111 8.16918052,7.87116918 L8.16777148,18.1500945 C8.16777148,18.913088 8.36080956,19.6880584 8.701092,20.3580555 C8.46226022,20.338329 8.21145163,20.3277612 7.94725718,20.3277612 L2.87401928,20.3277612 Z M21.1259807,20.3277612 L16.0534473,20.3277612 C14.7352932,20.3277612 13.7285362,20.5771608 12.9373619,20.9350562 L12.9373619,15.6117142 L15.832933,15.6117142 L15.832933,7.87046466 C15.9047939,7.86764659 15.9773593,7.864124 16.0534473,7.864124 L21.1259807,7.864124 L21.1259807,20.3277612 Z" />
  </svg>
);
