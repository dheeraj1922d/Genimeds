import "../globals.css";
import Navbar from "../components/Navbar";
import SearchContext from "../SearchContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchContext>
          <Navbar />
          {children}
        </SearchContext>
      </body>
    </html>
  );
}
