export const metadata = {
  title: "Connection Card",
  description: "Trip profile, meetup, and connection platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif", background: "#0a0a0a", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
