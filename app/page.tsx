import Image from "next/image";
import Counter from "./components/counter";
import Timer from "./components/timer";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-evenly p-24">
       
      <Counter />
      <br></br>
      <Timer />
    </main>
  );
}
