import Navbar from '@/components/navigation/navbar/Navbar';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>

        </Navbar>
        {children}
      </body>
    </html>
  );
}