import Navigation from './components/Navigation';
import './globals.css';

export const metadata = {
  title: 'My Website',
  description: 'This is a website with a video background.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='bg-white w-full'>
      <head>
        {/* Any meta tags, styles, etc. can go here */}
      </head>
      <body className="bg-white h-full w-full">
        {children}
      </body>
    </html>
  );
}
