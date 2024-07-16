import Encryption from "@/src/client/components/molecules/Encryption";
import HeroContainer from "@/src/client/components/molecules/HeroContainer";
import Skills from "@/src/client/components/organisms/Skills";

export default function Home(): JSX.Element {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContainer />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}
