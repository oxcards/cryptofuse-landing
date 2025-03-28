import React from 'react';

interface EthereumIconMonoProps {
  color?: string;
  size?: number;
  className?: string;
}

export const EthereumIconMono: React.FC<EthereumIconMonoProps> = ({ 
  color = "#3B82F6", 
  size = 64, 
  className = "" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 256 417" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="none">
        <path
          fill={color}
          d="M127.9611 0.0366211L125.1661 9.58742V285.168L127.9611 287.958L255.9231 212.32L127.9611 0.0366211Z"
        />
        <path
          fill={color}
          fillOpacity="0.8"
          d="M127.962 0.0366211L0 212.32L127.962 287.959V154.158V0.0366211Z"
        />
        <path
          fill={color}
          d="M127.9609 312.1866L126.3859 314.1056V412.3056L127.9609 416.9056L255.9999 236.5866L127.9609 312.1866Z"
        />
        <path
          fill={color}
          fillOpacity="0.8"
          d="M127.962 416.9053V312.1863L0 236.5863L127.962 416.9053Z"
        />
        <path
          fill={color}
          fillOpacity="0.6"
          d="M127.962 287.9577L255.923 212.3207L127.962 154.1587V287.9577Z"
        />
        <path
          fill={color}
          fillOpacity="0.5"
          d="M0 212.3208L127.962 287.9578V154.1588L0 212.3208Z"
        />
      </g>
    </svg>
  );
};
