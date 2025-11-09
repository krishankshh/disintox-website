export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col items-start`}>
      {/* Main Logo */}
      <div className="flex items-baseline space-x-0.5">
        {/* DIS - Gray with registered mark */}
        <span className="font-bold text-2xl md:text-3xl tracking-tight text-gray-700">
          DIS
        </span>
        <span className="text-[8px] align-super text-gray-500">®</span>

        {/* INTOX - Multi-colored */}
        <span className="font-bold text-2xl md:text-3xl tracking-tight">
          <span className="text-red-600">I</span>
          <span className="text-green-600">N</span>
          <span className="text-red-600">T</span>
          <span className="relative inline-block">
            <span className="text-gray-700">O</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full -z-10"></span>
          </span>
          <span className="text-gray-700">X</span>
        </span>
      </div>

      {/* Tagline */}
      <p className="text-[10px] font-medium text-gray-600 tracking-wide mt-0.5 uppercase">
        LET THE DIS-INFECT BEGIN
      </p>

      {/* Decorative germs */}
      <div className="flex items-center space-x-1 mt-0.5">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
      </div>
    </div>
  );
}

export function LogoWithTagline({ className = "" }: { className?: string }) {
  return <Logo className={className} />;
}
