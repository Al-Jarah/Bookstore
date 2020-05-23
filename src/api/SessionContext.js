import React, { createContext, useState } from "react";
import { setSessionCookie, getSessionCookie } from "../util/CookieUtils.js";


export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  
  const [uuid, setUUID] = useState(getSessionCookie());

  const set = (newUUID) => {
    setSessionCookie(newUUID);
    setUUID(newUUID);
  };

  return (
    <CookieContext.Provider value={[uuid, set]}>
      {children}
    </CookieContext.Provider>
  );
};
