import Hero from "@/src/client/components/atoms/Hero";

export default function Home(): JSX.Element {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  );
}
