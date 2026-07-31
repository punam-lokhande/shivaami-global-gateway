import { useEffect } from "react";

declare global {
  interface Window {
    trackingFunctions?: {
      onLoad: (config: { appId: string }) => void;
    };
  }
}

export default function ApolloTracker() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://assets.apollo.io/micro/website-tracker/tracker.iife.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("Apollo script loaded");

      if (window.trackingFunctions) {
        console.log("Initializing Apollo...");

        window.trackingFunctions.onLoad({
          appId: "6638d99596e2a406af673efc",
        });
      } else {
        console.error("trackingFunctions not found");
      }
    };

    script.onerror = () => {
      console.error("Apollo script failed to load");
    };

    document.head.appendChild(script);
  }, []);

  return null;
}