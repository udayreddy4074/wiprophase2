import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = { background: "#fff", color: "#000" };
const darkTheme = { background: "#222", color: "#fff" };

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
  transition: all 0.3s ease;
`;

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <button
          onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
          className="btn btn-primary"
        >
          Toggle Theme
        </button>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default ThemeToggle;
