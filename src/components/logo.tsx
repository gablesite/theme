import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M 256.00,446.00 420.54,351.00 420.54,208.50 338.27,66.00 173.73,161.00 91.46,208.50 91.46,351.00 Z" fill="none" stroke="#ffffff" strokeWidth="40.0" strokeLinejoin="round" />
      <path d="M 256.00,446.00 420.54,351.00 420.54,208.50 256.00,303.50 Z" fill="#fbbf24" stroke="#1e293b" strokeWidth="16" strokeLinejoin="round" />
      <path d="M 256.00,446.00 256.00,303.50 173.73,161.00 91.46,208.50 91.46,351.00 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="16" strokeLinejoin="round" />
      <path d="M 256.00,303.50 420.54,208.50 338.27,66.00 173.73,161.00 Z" fill="#1e293b" stroke="#1e293b" strokeWidth="16" strokeLinejoin="round" />
    </svg>
  )
}
