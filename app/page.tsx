import HeroContainer from "@/src/client/components/molecules/HeroContainer";

export default function Home(): JSX.Element {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <HeroContainer />
      </div>
    </main>
  );
}
