import { useState, useEffect } from "react";

type BrowserT = undefined
  | "Firefox"
  | "Edge"
  | "Opera"
  | "Chrome"
  | "Safari"
  | "IE"

function getBrowserName(): BrowserT {
  const ua = navigator.userAgent;

  if (/firefox/i.test(ua)) {
    return "Firefox";
  }

  // Edge (Chromium-based)
  if (/edg/i.test(ua)) {
    return "Edge";
  }

  // Opera
  if (/opr|opera/i.test(ua)) {
    return "Opera";
  }

  // Chrome (excluding Edge Chromium)
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) {
    return "Chrome";
  }

  // Safari (excluding Chrome)
  if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
    return "Safari";
  }

  // Internet Explorer
  if (/msie|trident/i.test(ua)) {
    return "IE";
  }

  return undefined;
}

export function useBrowser() {
  const [browser, setBrowser] = useState<BrowserT>(undefined);

  useEffect(() => {
    setBrowser(getBrowserName());
  }, []);

  return browser;
}
