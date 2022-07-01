import "./styles/App.css";
import "./styles/cursor_styles.css";
import "./pages/Home.css";
import CursorProvider from "./context/cursorProvider";
import Home from "./pages/Home";

function App() {
  return (
    <CursorProvider>
      <Home />
    </CursorProvider>
  );
}

export default App;
