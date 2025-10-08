/*layout.js*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
