import React, { createContext, useState } from "react";

interface ContextInerface {
  state: boolean
}

const appCtxDefaultValue = {
  state: false,
  setState: (state: boolean) => {},
};

export const Context = createContext<ContextInerface | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(appCtxDefaultValue.state);

  const value = {
    state,
    setState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
