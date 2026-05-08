import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BoasVindas from "../components/sections/BoasVindas";
import Contato from "../components/sections/Contato";
import Projetos from "../components/sections/Projetos";
import Sobre from "../components/sections/Sobre";
import Stack from "../components/sections/Stack";

export type ThemeName = "earth" | "graphite" | "dark" | "vivid";

export default function Index() {
  const [theme, setTheme] = useState<ThemeName>("earth");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as
      | ThemeName
      | null;

    if (
      savedTheme === "earth" ||
      savedTheme === "graphite" ||
      savedTheme === "dark" ||
      savedTheme === "vivid"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div
      className="page-shell min-h-screen overflow-x-hidden text-neutral-950"
      data-theme={theme}
    >
      <Navbar theme={theme} onThemeChange={setTheme} />
      <BoasVindas />
      <Sobre />
      <Stack />
      <Projetos />
      <Contato />
    </div>
  );
};
