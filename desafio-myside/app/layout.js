import StyledComponentsRegistry from '@/app/lib/registry';
import GlobalStyleProvider from './Components/GlobalStyles/GlobalStyleProvider';
import ReduxProvider from '@/app/redux/ReduxProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GlobalStyleProvider />
        <ReduxProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
