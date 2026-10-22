import Image from "next/image";

export function Ph({ src, label, className = "", style }) {
  if (src) {
    return (
      <div className={`ph ${className}`} style={{ ...style, position: "relative", padding: 0, overflow: "hidden" }}>
        <Image src={src} alt={label} fill sizes="(max-width:820px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return <div className={`ph ${className}`} style={style}>{label}</div>;
}

export function Cover({ src, alt }) {
  if (!src) return null;
  return (
    <div className="cover">
      <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
      <div className="shade" />
    </div>
  );
}
