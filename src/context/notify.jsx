import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationConfig, setNotificationConfig] = useState({
    shouldNotify: true,
    config: {},
  });

  function notifyUser({ config }) {
    setShouldNotify(false);
    setNotificationConfig(config);
    setTimeout(() => {
      setShouldNotify(true);
      setNotificationConfig({});
    }, 3000);
  }
  return (
    <NotificationContext.Provider
      value={{
        shouldNotify,
        notifyUser,
        notificationConfig,
        setNotificationConfig,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotify = () => useContext(NotificationContext);
