"use client";

import { useEffect, useRef, useState } from "react";
import { PiVideoCameraLight } from "react-icons/pi";

/*
  Autoplaying, muted, looping background-style video from /public.
  If the file has not been added yet, a branded placeholder is shown
  with the expected file name.
*/
export default function VideoBox({ src, poster, label, className = "", rounded = true }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Catch load errors that happened before hydration
    if (v.error || v.networkState === 3) setFailed(true);
  }, []);

  return (
    <div className={`img-box video-box ${rounded ? "img-box--rounded" : ""} ${className}`}>
      {!failed ? (
        <video
          ref={ref}
          className="video-box__video"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="img-box__placeholder" role="img" aria-label={label}>
          <PiVideoCameraLight className="img-box__icon" />
          <span className="img-box__name">{src.replace(/^\//, "")}</span>
        </div>
      )}
    </div>
  );
}
