import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
