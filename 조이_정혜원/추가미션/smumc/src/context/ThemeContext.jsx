import { createContext, useState } from "react";

// 데이터 담고 있음
export const ThemeContext = createContext();

// 우산
export function ThemeContextProvider({ children }) {
  const [nowTheme, setNowTheme] = useState(true); // true = "darkTheme" , false = "lightTheme"

  const changeClick = () => {
    setNowTheme((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ nowTheme, changeClick }}>{children}</ThemeContext.Provider>;
}
