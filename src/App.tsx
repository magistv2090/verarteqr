import { ContactCard } from "./components/ContactCard";
import { FallingFlowers } from "./components/FallingFlowers";

export default function App() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      <FallingFlowers />
      <ContactCard />
    </div>
  );
}