import { createContext, useContext } from "react";

export const Themecontext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const Themeprovider = Themecontext.Provider;

//custum hook
export default function useTheme() {
  return useContext(Themecontext);
}