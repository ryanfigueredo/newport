import LandingPage from "@/components";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
        <SpeedInsights/>
        <LandingPage />
    </>
  );
}
