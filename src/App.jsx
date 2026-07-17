import { useContext , useState} from "react";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import { ThemeContext } from "./context/ThemeContext";
import HeroSlider from "./components/HeroSlider";
import Login from "./components/Login";

function App() {
  const { isDark } = useContext(ThemeContext);
  const [login, setLogin] = useState(false);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Header setLogin={setLogin}
      />
      {
        login ? (
          <Login setLogin={setLogin} />
        ) : (
          <>
            <HeroSlider/>
            <CategoryBar/>
          </>
        )
      }

    </div>
  );
}

export default App;

