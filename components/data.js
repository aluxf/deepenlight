import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  DocumentIcon
} from "@heroicons/react/24/solid";

import stepThreeImg from "../public/img/step-three.png";
import stepOneImg from "../public/img/step-one.png";
import stepFourImg from "../public/img/step-four.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import stepTwoImg from "../public/img/step-two.png"


const priceOne = {
  title: "Basic",
  price: "$4.99",
  unit: "Document",
  desc: "For individuals seeking comprehensive feedback on a single document.",
  features: [
    "100 pages / document",
    "16 MB / document",
    "Support for .doc .docx .pdf .txt.",
    "Email support"
  ]
}

const priceTwo = {
  title: "Pro",
  price: "$39.99",
  unit: "Month",
  desc: "For frequent writers and professionals who require regular feedback.",
  features: [
    "30 documents / month",
    "200 pages / document",
    "32 MB / document",
    "Support for .doc .docx .pdf .txt.",
    "Priority Email support",
  ],
  dark: true
}

const stepOne = {
  title: "1. Upload your document",
  desc: 
  `Kickstart your journey to flawless writing by simply uploading your text document - be it an essay, business report, or a blog post, we're all set to take it on.`,
  image: stepOneImg,
  width: 600,
  icon: <DocumentIcon/>,
  bullets: [
    {
      title: "Receive instant feedback",
      desc: "Placeholder",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve your content",
      desc: "Placeholder",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Chat with your document",
      desc: "Placeholder",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const stepTwo = {
  title: "2. Specify your genre",
  desc: "Next, let's narrow down your style. Specify your genre from a variety of options, and we'll customize our feedback accordingly. We're all set to match your writing style.",
  image: stepTwoImg,
  width: 700,
  icon: <DocumentIcon/>,
  bullets: [
    {
      title: "Receive instant feedback",
      desc: "Placeholder",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve your content",
      desc: "Placeholder",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Chat with your document",
      desc: "Placeholder",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const stepThree = {
  title: "3. Choose your feedback",
  desc: "Proceed by choosing the kind of feedback you require. Highlight the aspects that suit your writing and let our AI reviewer tailor its advice accordingly.",
  image: stepThreeImg,
  width: 700,
  icon: <DocumentIcon/>,
  bullets: [
    {
      title: "Receive instant feedback",
      desc: "Placeholder",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve your content",
      desc: "Placeholder",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Chat with your document",
      desc: "Placeholder",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};
const stepFour = {
  title: "4. Receive feedback by AI",
  desc: "With your choices in place, the AI analyzes your document to offer detailed insights. You'll receive clear and actionable recommendations tailored to your needs. It's like having a personal tutor at your fingertips, any time you need it.",
  image: stepFourImg,
  width: 700,
  icon: <DocumentIcon/>,
  bullets: [
    {
      title: "Receive instant feedback",
      desc: "Placeholder",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve your content",
      desc: "Placeholder",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Chat with your document",
      desc: "Placeholder",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  width: 400,
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const steps = [stepOne, stepTwo, stepThree, stepFour]
const pricingList = [priceOne, priceTwo]

export {steps, benefitTwo, pricingList}
