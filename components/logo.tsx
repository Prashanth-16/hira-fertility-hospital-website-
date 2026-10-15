import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Hira Fertility Logo"
      width={90}
      height={90}
      priority
      className={className}
    />
  );
}