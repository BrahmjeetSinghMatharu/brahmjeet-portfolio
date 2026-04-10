export function isSafariBrowser() {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent;

  return (
    /Safari/.test(userAgent) &&
    !/Chrome|Chromium|CriOS|FxiOS|EdgiOS|OPiOS|Android/.test(userAgent)
  );
}