import { useEffect, useState } from "react";

type PromptT = Event & {
  prompt: () => void
}

export function useInstallPWA() {
  const [installPrompt, setInstallPropmt] = useState<PromptT | undefined>(undefined);


  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handlePromptEvent);

    return () => {
      window.removeEventListener("beforeinstallprompt", handlePromptEvent);
    };
  }, []);

  const handlePromptEvent = (ev: Event) => {
    ev.preventDefault();
    setInstallPropmt(ev as PromptT);
  };

  const install = () => {
    if (installPrompt) {
      installPrompt.prompt();
    } else {
      console.warn("'beforeinstallprompt' is not support on your browser")
    }
  };

  return { install }
}