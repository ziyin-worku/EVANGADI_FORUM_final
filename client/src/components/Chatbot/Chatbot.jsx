import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "ATyPv_1ZlunmN7lkaV6N4"; // Give it a specific id
    script.async = true;
    script.setAttribute("chatbotId", "ATyPv_1ZlunmN7lkaV6N4");
    document.body.appendChild(script);

    return () => {
      // Remove the script tag
      const existingScript = document.getElementById("chatbase-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      // Remove the Chatbase widget container if it exists
      const iframeWrapper = document.querySelector("iframe[src*='chatbase']");
      if (iframeWrapper && iframeWrapper.parentElement) {
        iframeWrapper.parentElement.remove(); // This removes the wrapper
      }
    };
  }, []);

  return <div id="chatbase-container"></div>;
};

export default Chatbot;
