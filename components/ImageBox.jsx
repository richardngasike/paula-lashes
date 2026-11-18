"use client";

import { useState } from "react";
import Image from "next/image";
import { PiImageLight } from "react-icons/pi";

/*
  Renders an image from /public. If the file has not been added yet,
  a branded placeholder is shown with the expected file name.
*/
export default function ImageBox({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = true,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`img-box ${rounded ? "img-box--rounded" : ""} ${className}`}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="img-box__img"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="img-box__placeholder" role="img" aria-label={alt}>
          <PiImageLight className="img-box__icon" />
          <span className="img-box__name">{src.replace(/^\//, "")}</span>
        </div>
      )}
    </div>
  );
}
