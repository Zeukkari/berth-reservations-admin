import React from 'react';

type Props = { className?: string };

export default ({ className = '' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M13.9714253,10.9514872 C14.1495802,10.7554905 14.4021203,10.6437617 14.6669574,10.6437617 L15.7581797,10.6437617 C16.2917391,10.6437617 16.8001765,10.4170603 17.1567126,10.0201253 L21,5.74180501 L20.4183844,5.16018943 L17.5935184,7.98505543 L17.1781003,7.56963729 L19.9198676,4.66167257 L19.3382897,4.08009472 L16.4303627,6.821862 L16.0149068,6.40648158 L18.8397728,3.58161558 L18.258195,3 L13.9798747,6.84324964 C13.5829397,7.19982348 13.3562006,7.70826089 13.3562006,8.24182028 L13.3562006,9.4018829 C13.3562006,9.66513571 13.2458298,9.91628017 13.0519453,10.0943219 L11.7379445,11.309155 L3.64251505,3.18784912 C3.39091794,2.93621428 2.96044924,3.14269743 3.00292275,3.49606501 C3.24086497,5.47538366 4.30553191,7.76171113 6.54153997,9.99771918 L8.18653998,11.6427569 L9.95854562,11.6427569 L10.5907069,12.3698613 L4.03439548,18.4314657 L5.65114268,20.0338036 L11.6041869,13.5355065 L17.3328306,20.1243333 L18.9900521,18.5844608 L12.7310553,12.305472 L13.9714253,10.9514872 Z" />
  </svg>
);
