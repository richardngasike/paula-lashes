"use client";

import { useEffect, useRef, useState } from "react";
import { PiVideoCameraLight } from "react-icons/pi";

/*
  Autoplaying, muted, looping video from /public.
  Works on mobile (iOS Safari / Android Chrome): the muted attribute is forced
  on the element because React only sets it as a property, which iOS ignores
  for autoplay. If autoplay is still blocked (e.g. Low Power Mode), playback
  starts on the first touch, scroll or click.
  If the file is missing, a branded placeholder is shown (or nothing when
  showFallback is false).
*/
export default function VideoBox({
  src,
  poster,
  label,
  className = "",
  rounded = true,
  showFallback = true,
}) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    if (v.error || v.networkState === 3) {
      setFailed(true);
      return;
    }

    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const events = ["touchstart", "click", "scroll", "keydown"];
    const removeListeners = () =>
      events.forEach((ev) => window.removeEventListener(ev, onInteract));

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(removeListeners).catch(() => {});
      }
    };

    function onInteract() {
      tryPlay();
    }

    events.forEach((ev) => window.addEventListener(ev, onInteract, { passive: true }));
    tryPlay();

    const onVisibility = () => {
      if (document.visibilityState === "visible" && v.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      removeListeners();
      document.removeEventListener("visibilitychange", onVisibility);
    };
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
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          aria-label={label || undefined}
          onError={() => setFailed(true)}
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
        />
      ) : showFallback ? (
        <div className="img-box__placeholder" role="img" aria-label={label}>
          <PiVideoCameraLight className="img-box__icon" />
          <span className="img-box__name">{src.replace(/^\//, "")}</span>
        </div>
      ) : null}
    </div>
  );
}
