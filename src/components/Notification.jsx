import React, { useEffect, useState } from "react";
import { useNotify } from "../context/notify";

function Notification({ children, type }) {
  const { shouldNotify, notificationConfig } = useNotify();
  const { bgColor, notificationText } = notificationConfig;

  if (shouldNotify) {
    return null;
  }
  return (
    <div
      style={{
        width: "100%",
        padding: "1em",
        background: bgColor,
        position: "fixed",
        bottom: "0",
      }}
    >
      <p>{notificationText}</p>
      {children}
    </div>
  );
}

export default Notification;
