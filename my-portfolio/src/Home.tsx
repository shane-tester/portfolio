import Intouch from './assets/Placeholder (2).png';
import PillThought from './assets/Placeholder (3).png';
import Watonomous from './assets/future (1).png';
import Palkia from './assets/future (4).png';
import { useNavigate } from 'react-router-dom';
import PocketATS from './assets/pocket_ats_logo_no_shadow (1).png'
import UWaterloo from './assets/Waterloo logo.png'
import Shopify from './assets/Shopify.png'
import Googlelogo from './assets/Google Logo.svg'
import Palkialogo from './assets/Palkia_Logo-removebg-preview.png'
import Intouchlogo from './assets/IntouchCX logo.png'
import ShopifyLogo from './assets/Shopify Logo.png'
import PolarityLogo from './assets/startup (1).png'
import Polarity from './assets/Polarity (2).png'
import AforeLogo from './assets/Afore.jpg'

/**
 * Main application component displaying Shane Barakat's portfolio
 * @returns {JSX.Element} Rendered portfolio page
 */
const App: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Navigate to IntouchCX project page
   */
  const navigateToIntouch = (): void => {
    navigate('/intouchcx');
  };

  /**
   * Navigate to PillThought project page
   */
  const navigateToPillThought = (): void => {
    navigate('/pillthought');
  };

  /**
   * Navigate to Palkia project page
   */
  const navigateToPalkia = (): void => {
    navigate('/palkia');
  };

  /**
   * Open external URL in new tab
   * @param {string} url - URL to open
   */
  const openExternalUrl = (url: string): void => {
    window.open(url, '_blank');
  };

  /**
   * Render social media icons with consistent styling
   * @returns {JSX.Element} Social media icons component
   */
  const renderSocialIcons = (): JSX.Element => (
    <div className="flex gap-4">
      <a href="https://github.com/shanebarakat" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github transition-colors duration-300 hover:stroke-white">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/shane-barakat/" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-colors duration-300 hover:stroke-white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      <a href="mailto:srbaraka@uwaterloo.ca" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail transition-colors duration-300 hover:stroke-white">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </a>
      <a href="https://drive.google.com/file/d/1K2uE4zAwysAU6qhHIvyrjAnHwrpMt3s1/view?usp=sharing" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user transition-colors duration-300 hover:stroke-white">
          <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
          <path d="M15 18a3 3 0 1 0-6 0"/>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
          <circle cx="12" cy="13" r="2"/>
        </svg>
      </a>
    </div>
  );

  /**
   * Render recent activities section
   * @returns {JSX.Element} Recently section component
   */
  const renderRecentlySection = (): JSX.Element => (
    <div className="w-[48%] pl-1">
      <h3 className="text-2xl font-hyperlegible font-semibold mb-3">Recently, I...</h3>
      <ul className="space-y-2 font-noto text-gray-300">
        <li className="flex items-center flex-wrap gap-1">
          → Founded 
          <a href="https://www.polarity.cc" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={PolarityLogo} 
              className='w-[17px] mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
              alt="Polarity"
            /> 
            <span className="text-gray-200 transition-all duration-300 group-hover:text-white group-hover:underline">
              Polarity
            </span>
          </a>
          , won SPURHACKS ($10k), now backed by 
          <a href="https://www.afore.vc/portfolio" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={AforeLogo} 
              className='w-[17px] mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
              alt="Afore Capital"
            />  
            <span className="text-blue-400 transition-all duration-300 group-hover:text-blue group-hover:underline">
              Afore Capital
            </span> 
          </a>
        </li>
        <li className="flex items-center flex-wrap gap-1">
          → Secured Fall 2025 Co-Op at 
          <a href="https://www.shopify.com/ca" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={ShopifyLogo} 
              className='w-[17px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-8' 
              alt="Shopify"
            /> 
            <span className="text-green-200 transition-all duration-300 group-hover:text-green-500 group-hover:underline">
              Shopify
            </span>
          </a> as a Software Engineer Intern
        </li>
        <li className="flex items-center flex-wrap gap-1">
          → Built 
          <a href="https://pocket-ats.live" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={PocketATS} 
              className='w-[15px] ml-1 mr-1 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110' 
              alt="Pocket ATS"
            />
            <span className="text-blue-300 transition-all duration-300 group-hover:text-blue-400 group-hover:underline">
              Pocket ATS
            </span>
          </a> 
          and scaled to <span className="text-white">1500+ users</span> in one month
        </li>
        <li className="flex items-center flex-wrap gap-1">
          → Started <img src={UWaterloo} className='w-[22px] ml-1'/> Research role building <span className="text-white">AI/ML solutions</span> for Chicago Bureau of Police
        </li>
        <li className="flex items-center flex-wrap gap-1">
          → Won <img src={Googlelogo} className='w-[15px] ml-1'/> <span className="text-white">oogle's AI Innovation Award</span> for 
          <a href="https://palkia.me" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={Palkialogo} 
              className='w-[20px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6' 
              alt="Palkia"
            />
            <span className="text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:underline">
              Palkia
            </span>
          </a>
        </li>
        <li className="flex items-center flex-wrap gap-1">
          → Completed SWE Co-Op at 
          <a href="https://www.intouchcx.com/solutions/intouchai-automation/" target="_blank" rel="noreferrer" className="group inline-flex items-center">
            <img 
              src={Intouchlogo} 
              className='w-[20px] ml-1 mr-1 transform transition-all duration-300 group-hover:scale-110 group-hover:brightness-125' 
              alt="IntouchCX"
            />
            <span className="text-green-400 transition-all duration-300 group-hover:text-green-300 group-hover:underline">
              IntouchCX
            </span>
          </a> 
          building enterprise tech tools
        </li>
        <li className="text-white font-medium pt-1">See more of what I'm working on below ↓</li>
      </ul>
    </div>
  );

  /**
   * Render mobile header section
   * @returns {JSX.Element} Mobile header component
   */
  const renderMobileHeader = (): JSX.Element => (
    <div className="lg:hidden flex flex-col items-center"> 
      <h1 className="text-[45px] sm:text-6xl sm:mb-6 font-hyperlegible font-semibold">Shane Barakat</h1>
      <h2 className="text-xl font-medium text-center font-noto mb-6">
        Engineering Student at UWaterloo <br/>
        Seeking Summer 2026 Internship Opportunities 
      </h2>
      {renderSocialIcons()}
    </div>
  );

  /**
   * Render desktop header section
   * @returns {JSX.Element} Desktop header component
   */
  const renderDesktopHeader = (): JSX.Element => (
    <div className="hidden lg:flex w-full max-w-screen-xl px-4 justify-between">
      <div className="flex-col items-start flex w-[48%]">
        <h1 className="text-5xl font-hyperlegible font-semibold mb-4">Shane Barakat</h1>
        <h2 className="text-xl font-medium font-noto mb-6">
          Management Engineering Student at UWaterloo <br/>
          Seeking Summer 2026 Co-Op Opportunities (SWE, Data, Product)
        </h2>
        {renderSocialIcons()}
      </div>
      {renderRecentlySection()}
    </div>
  );

  /**
   * Render project grid item
   * @param {string} image - Image source
   * @param {string} alt - Alt text for image
   * @param {string} title - Project title
   * @param {string} date - Project date
   * @param {() => void} onClick - Click handler
   * @returns {JSX.Element} Grid item component
   */
  const renderProjectItem = (
    image: string,
    alt: string,
    title: string,
    date: string,
    onClick: () => void
  ): JSX.Element => (
    <div className="flex flex-col items-start">
      <img
        src={image}
        alt={alt}
        className="rounded-lg hover:opacity-60 cursor-pointer w-full max-w-[800px] h-auto duration-300"
        onClick={onClick}
      />
      <p className="mt-2 text-5px sm:text-xl text-white font-noto">{title}</p>
      <p className="text-base text-gray-400 font-noto">{date}</p>
    </div>
  );

  return (
    <div className="bg-black bg-[radial-gradient(circle,rgba(180,180,180,0.2)_1px,rgba(0,9,29,0)_1px)] bg-[size:20px_20px] no-scrollbar text-white min-h-screen w-screen flex flex-col justify-start items-center pt-16 px-0 scrollbar-y-hide">
      {renderMobileHeader()}
      {renderDesktopHeader()}
      
      <div className="w-full max-w-screen-xl mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderProjectItem(
            Polarity,
            "Polarity",
            "Co-Founder/CTO - Polarity (Backed by Afore Capital)",
            "June 2025 - Present",
            () => openExternalUrl('https://polarity.cc')
          )}
          
          {renderProjectItem(
            Shopify,
            "Shopify",
            "Incoming SWE Intern - Shopify",
            "Sept 2025 - Dec 2025",
            () => openExternalUrl('https://www.shopify.com/ca')
          )}

          {renderProjectItem(
            Intouch,
            "IntouchCX",
            "SWE Intern - IntouchCX",
            "Jan 2025 - Apr 2025",
            navigateToIntouch
          )}

          {renderProjectItem(
            Palkia,
            "Palkia",
            "Project - Palkia",
            "2025",
            navigateToPalkia
          )}

          {renderProjectItem(
            PillThought,
            "PillThought",
            "Founding Engineer / COO - PillThought",
            "Sept 2023 - April 2025",
            navigateToPillThought
          )}

          {renderProjectItem(
            Watonomous,
            "WATO",
            "Software Engineer - WATO Design Team",
            "Jan 2025 - May 2025",
            () => openExternalUrl('https://www.watonomous.ca/about')
          )}
        </div>
      </div>

      <div className="flex bg-b gap-4 mt-8 justify-between w-full box-border border-t-2 bg-black border-gray-600">
        <p className="text-white flex items-center justify-start sm:text-base text-xs py-4 ml-9">Shane Barakat</p>
        <p className="text-white flex items-center py-4 justify-end sm:text-base text-xs mr-9">Last Update - May 2025</p>
      </div>
    </div>
  );
};

export default App;