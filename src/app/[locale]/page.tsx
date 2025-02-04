import AboutEve from "../components/home/abouteve/abouteve";
import MortgageCalculator from "../components/home/calculator/mortgageCalculator";
import JourneyCard from "../components/home/cards/journeyCard";
import ReportCard from "../components/home/cards/reportCard";
import HomeExplore from "../components/utility/homeExplore";

export default function Home() {
  return (
    <>
      <main className="bg-[#131f33]">
        <HomeExplore />
        <div className="mb-32">
          <MortgageCalculator />
        </div>
        <ReportCard />
        <AboutEve />
      </main>
      <JourneyCard />
    </>
  );
}
