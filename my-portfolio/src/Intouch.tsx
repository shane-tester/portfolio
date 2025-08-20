import React, { useEffect } from 'react';
import Intouch from './assets/Placeholder (2).png';

interface AboutProps {
  /**
   * Optional custom scroll handler for testing purposes
   * @default window.scrollTo
   */
  handleScroll?: () => void;
}

/**
 * About component displaying IntouchCX internship experience
 * Shows skills, summary, and project overview with responsive layout
 * @param props - Component props
 * @returns JSX element
 */
const About: React.FC<AboutProps> = ({ handleScroll }) => {
  /**
   * Handles scroll to top on component mount
   * Uses injected handler for testability
   */
  const scrollToTop = (): void => {
    if (handleScroll) {
      handleScroll();
    } else {
      window.scrollTo(0, 0);
    }
  };

  /**
   * Renders navigation links with consistent styling
   */
  const renderNavLinks = (): JSX.Element => (
    <div className="w-full flex justify-between px-6 py-4">
      <a 
        href="/" 
        className="text-gray-500 font-noto hover:text-green-400 duration-300"
        aria-label="Back to Home"
      >
        ← Back to Home
      </a>
      <a
        href="https://www.intouchcx.com/solutions/intouchai-automation/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 font-noto hover:text-green-400 duration-300"
      >
        Company Website
      </a>
    </div>
  );

  /**
   * Renders skills section with consistent styling
   */
  const renderSkillsSection = (): JSX.Element => (
    <div className="flex-1">
      <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Skills</h3>
      <ul className="list-none space-y-q sm:text-lg text-[12px] leading-relaxed text-gray-400 font-noto">
        <li>Vue.js</li>
        <li>C#</li>
        <li>.Net</li>
        <li>Javascript</li>
        <li>Docker</li>
        <li>TypeScript</li>
        <li>UI Path</li>
      </ul>
    </div>
  );

  /**
   * Renders summary section with consistent styling
   */
  const renderSummarySection = (): JSX.Element => (
    <div className="flex-1">
      <h3 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Summary</h3>
      <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
        IntouchCX is a global customer experience provider serving leading tech clients. As a Software Engineer Intern, I developed automation pipelines and integrated AI-driven tools to streamline internal workflows, reduce manual overhead, and enhance scalability across high-volume support operations.
      </p>
    </div>
  );

  /**
   * Renders detailed overview section
   */
  const renderOverviewSection = (): JSX.Element => (
    <div className="text-left">
      <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Overview</h2>
      <p className="sm:text-lg text-[12px] font-noto mb-6 text-gray-400 leading-relaxed">
        • Developed enterprise-grade automations using <span className="text-white">C#/.NET</span> for multiple high-profile clients, resulting in over <span className="text-white">$50,000</span> in annual labor savings<br /><br />
        
        • Built and deployed a full-stack internal translation platform with <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">SQL Server</span>, saving over <span className="text-white">10,000+ hours annually</span> for <span className="text-white">500+</span> global employees<br /><br />
        
        • Engineered scalable <span className="text-white">CI/CD pipelines</span> using <span className="text-white">Jenkins</span> and integrated automated test suites, increasing test coverage by <span className="text-white">35%</span> and reducing release time<br /><br />

        
        • Integrated internal tools with third-party APIs to streamline reporting and reduce manual workflows by over <span className="text-white">70%</span><br /><br />
      </p>

      <h2 className="text-[25px] sm:text-3xl font-medium font-hyperlegible mb-4">Conclusion</h2>
      <p className="sm:text-lg text-[12px] font-noto text-gray-400 leading-relaxed">
        Living and working in Winnipeg for several months was a unique and rewarding experience. It gave me the chance to grow both personally and professionally while being part of an incredible team at IntouchCX. I'm truly thankful for the opportunity to contribute to impactful projects and collaborate with talented individuals who constantly inspired innovation.
      </p>
    </div>
  );

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="bg-black text-white text-sm sm:text-base min-h-screen w-screen flex flex-col justify-center items-center px-6">
      {/* Container for Links and Content */}
      <div className="w-full max-w-3xl mt-2">
        {/* Navigation Links */}
        {renderNavLinks()}

        {/* Content */}
        <div className="p-4">
          <h1 className="text-[35px] sm:text-5xl font-hyperlegible font-medium mb-3 font-hyperlegible font-medium text-center font-negligle">IntouchCX</h1>
          <h2 className="text-center font-noto">Software Engineer Intern</h2>
          <h2 className="mb-4 text-gray-500 font-noto text-center">Jan 2025 - April 2025</h2>
          <div className="flex justify-center">
            <img
              src={Intouch}
              alt="IntouchCX"
              className="rounded-lg cursor-pointer w-full h-auto mb-6"
            />
          </div>

          {/* Skills and Summary Section (Side by Side) */}
          <div className="flex justify-between items-start mb-8 sm:gap-7">
            {/* Skills Section */}
            {renderSkillsSection()}

            {/* Summary Section */}
            {renderSummarySection()}
          </div>

          {/* Detailed Text Section */}
          {renderOverviewSection()}
        </div>
      </div>
      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 border-gray-600">
        <p className="text-gray-400 sm:text-base text-xs flex items-center justify-start py-4 ml-9">Shane Barakat</p>
        <p className="text-gray-400 sm:text-base text-xs flex items-center py-4 justify-end mr-9">Last Update - April 2025</p>
      </div>
    </div>
  );
};

export default About;