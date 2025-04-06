
import React, { useEffect, useState } from "react";

const Chatbot = ({ triggerToggle }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (triggerToggle === null) {
      setOpen(triggerToggle);
    }
  }, [triggerToggle]);

  useEffect(() => {
    if (open) {
      if (!document.getElementById("chatbase-script")) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "chatbase-script";
        script.async = false;
        script.setAttribute("chatbotId", "ATyPv_1ZlunmN7lkaV6N4");
        document.body.appendChild(script);
      }
    } else {
      const existingScript = document.getElementById("chatbase-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const iframeWrapper = document.querySelector("iframe[src*='chatbase']");
      if (iframeWrapper && iframeWrapper.parentElement) {
        iframeWrapper.parentElement.remove();
      }
    }
  }, [ ]);

  return <div id="chatbase-container"></div>;
};

export default Chatbot;
