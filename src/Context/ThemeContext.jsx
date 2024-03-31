import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const userTheme = localStorage.getItem("onebox-theme") || "dark";
  const [theme, setTheme] = useState(userTheme);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    theme == "light"
      ? localStorage.setItem("onebox-theme", "dark")
      : localStorage.setItem("onebox-theme", "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
