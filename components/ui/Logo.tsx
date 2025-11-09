import Image from 'next/image';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Disintox - Let the Dis-Infect Begin"
      width={231}
      height={116}
      className={className}
      priority
    />
  );
}

export function LogoWithTagline({ className = "" }: { className?: string }) {
  return <Logo className={className} />;
}
