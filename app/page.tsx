import Image from "next/image";
import Game from "./game/page";

export default function App() {
  const navItems = [
    "Straße",
    "Reisen",
    "Bank",
    "ChaosCandyClub",
    "Krankenhaus",
  ];

  return (
    <main className="">
      <Game /> <div className="p-10"></div>
    </main>
  );
}
