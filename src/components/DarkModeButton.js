import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeButton = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="absolute top-5 right-5 transition-all">
      <button
        onClick={() => setTheme(colorTheme)}
        className="transition-all cursor-pointer focus:outline-none"
      >
        <FontAwesomeIcon
          size="2x"
          icon={colorTheme === "dark" ? faMoon : faSun}
        />
      </button>
    </div>
  );
};

export default DarkModeButton;
