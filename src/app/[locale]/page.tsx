import SectionOne from "../components/Home/SectionOne";
import SectionTwo from "../components/Home/SectionTwo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
