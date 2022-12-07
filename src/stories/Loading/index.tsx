function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="h-5 w-5 fill-current text-primary"
      >
        <rect x="0" y="7" width="4" height="6">
          <animate
            attributeName="height"
            values="6;20;6"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="7;0;7"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="7" y="7" width="4" height="6">
          <animate
            attributeName="height"
            values="6;20;6"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="7;0;7"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="14" y="7" width="4" height="6">
          <animate
            attributeName="height"
            values="6;20;6"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="7;0;7"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}

export default Loading;
