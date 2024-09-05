// app/layout.js
import GlobalStyleProvider from './Components/GlobalStyles/GlobalStyleProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalStyleProvider />
        {children}
      </body>
    </html>
  );
}
