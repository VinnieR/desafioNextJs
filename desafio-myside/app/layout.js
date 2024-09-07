import StyledComponentsRegistry from '@/app/lib/registry'
import GlobalStyleProvider from './Components/GlobalStyles/GlobalStyleProvider'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <GlobalStyleProvider />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}