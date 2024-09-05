'use client'

import GlobalStyle from "./GlobalStyle"

export default function GlobalStyleProvider({ children }) {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
  }