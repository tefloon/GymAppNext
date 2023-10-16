import MyCustomCard from "@/components/MyCustomCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex self-center flex-col items-center justify-start p-10 gap-5">
      <section className="flex flex-col gap-5 align-top items-start min-h-full min-w-[40rem]">
        <MyCustomCard title="Mój tytulik">
          <div>
            <ul>
              <li>
                <a href="/">Basia</a>
              </li>
              <li>
                <a href="/about">Kasia</a>
              </li>
              <li>
                <a href="/dupa">Tomek</a>
              </li>
            </ul>
          </div>
        </MyCustomCard>
        <MyCustomCard title="Mój tytulik">
          <div>
            <ul>
              <li>
                <a href="/">Basia</a>
              </li>
              <li>
                <a href="/about">Kasia</a>
              </li>
              <li>
                <a href="/dupa">Tomek</a>
              </li>
            </ul>
          </div>
        </MyCustomCard>
      </section>
    </div>
  );
}
