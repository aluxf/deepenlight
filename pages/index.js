import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { steps, pricingList, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Step from "../components/step"
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Pricing from "../components/pricing";
import Waitlist from "../components/waitlist"

const Home = () => {
  return (
    <>
      <Head>
        <title>Deepenlight - Advanced AI Text Reviewing Platform</title>
        <meta
          name="description"
          content="Deepenlight is an advanced AI text reviewing platform engineered for students, writers, and professionals. Utilizing the latest AI technology, we provide insightful feedback on any type of content."
        />
        <link rel="icon" href="/img/delogo.svg" />
      </Head>

      <Navbar />
      <Hero/>
      <SectionTitle
        id="features"
        pretitle="Deepenlight in a Nutshell"
        title="How does it work?">
        Transform your writing experience with AI in just four steps. Discover a refreshing approach that brings a new flavor to your writing.
        </SectionTitle>
      <div className="flex flex-col lg:gap-5">
        {
          
          steps.map((item, index) => {
            const imgPos = index % 2 == 0 ? "" : "right"
            return <Step key={index} imgPos={imgPos} data={item}/>
          })
        }
      </div>

      <SectionTitle
        id="pricing"
        pretitle="Invest in your writing"
        title="Pricing">
        </SectionTitle>
      <Pricing pricingList={pricingList}/>
      <SectionTitle id="faq" pretitle="FAQ" title="Frequently Asked Questions">
        We're happy to answer any questions you may have!
      </SectionTitle>
      <Faq />
      <Waitlist />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;