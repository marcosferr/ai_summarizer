import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumarizer logo" className="w-28 object-contain" />
        <button
          onClick={() => {
            window.open("https://github.com/marcosferr/ai_summarizer");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading ith Summize, an open-source article summarize that
        transforms lengthy articles into clear and concise libraries
      </h2>
    </header>
  );
};

export default Hero;
