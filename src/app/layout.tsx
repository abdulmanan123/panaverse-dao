import "./globals.css";

export const metadata = {
  title: "Panaverse DAO",
  description:
    "Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="px-4 py-8 w-full min-h-screen bg-slate-100">
          {children}
        </main>
      </body>
    </html>
  );
}
