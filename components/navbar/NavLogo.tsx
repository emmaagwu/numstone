export function NavLogo() {
  return (
    <div className="flex items-center gap-1.5">
      {/* Geometric icon mark */}
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-black">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="5.5" height="5.5" rx="1" fill="white" />
          <rect x="8.5" y="2" width="5.5" height="5.5" rx="1" fill="white" fillOpacity="0.5" />
          <rect x="2" y="8.5" width="5.5" height="5.5" rx="1" fill="white" fillOpacity="0.5" />
          <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" fill="white" />
        </svg>
      </div>
      {/* Wordmark */}
      <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
        numstone
      </span>
    </div>
  );
}
