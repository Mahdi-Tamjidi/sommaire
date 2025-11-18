import { Pizza } from "lucide-react";
import { MotionDiv, MotionH3 } from "@/components/common/motionWrapper";
import SummaryViewer from "../summaries/summaryViewer";

const DEMO_SUMMARY = `
🌍 AI Just Took Over the Music Charts! 🎶🤖
Quick Overview
•🎯An AI-generated song just hit #1 on global charts—welcome to the future of music.
•📌This marks a huge turning point for AI in creative industries.

# Document Details
•📄Type: Viral News Summary
•👥For: Music lovers, tech enthusiasts, creators, and trend-watchers

#Key Highlights
•🚀An AI-generated track created by a solo developer topped Spotify Global Top 50
•⭐The AI was trained on 10,000+ pop hits to mimic human emotion and style
•💫Industry leaders like Universal and Sony are now exploring AI collabs

# Why It Matters
•💡This breakthrough blurs the line between human creativity and machine intelligence, pushing us into a new era where AI doesn’t just support art—it creates it. The implications for artists, producers, and listeners are massive.

#Main Points
•🎯Main insight or finding: AI can now create commercially successful music indistinguishable from human-made songs
•💪Key strength or advantage: Rapid production, zero writer’s block, scalable creativity
•🔥Important outcome or result: Record labels are racing to invest in AI-music tools and partnerships

# Pro Tips
•⭐First practical recommendation: Artists should start experimenting with AI tools to stay ahead
•💎Second valuable insight: Use AI as a collaborator, not a competitor—it’s a creative amplifier
•🌟Third actionable advice: Learn prompt engineering to direct AI’s musical output more precisely

#Key Terms to Know
•📚AI Music Generation: Using artificial intelligence to compose and produce songs
•🔍Neural Networks: Algorithms that mimic the brain’s structure to understand patterns—in this case, musical ones

#Bottom Line
•💫AI isn’t coming for your playlist—it’s already in it. Stay curious, stay creative.
`;

const DemoSection = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem]
        -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4 ">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how Sommaire transforms
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                this PDF{" "}
              </span>
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

        <div className=" flex justify-center px-2 sm:px-4 lg:px-6">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
export default DemoSection;
