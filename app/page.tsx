import Image from "next/image";
import Counter from "./components/counter";
import Timer from "./components/timer";
import Apicall from "./components/apicall";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-evenly p-24">
       
      <Counter />
      <br></br>
      <Timer />
      <br></br>
      <Apicall />
    </main>
  );
}
