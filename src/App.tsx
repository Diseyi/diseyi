
import './App.css';
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import medium from "./assets/medium.svg";

function App() {

  return (
    <div className="App h-full lg:h-screen ">
      <div className="text-white w-5/6 mx-auto py-20 lg:py-24 ">
        <h1 className="text-5xl font-bold name">Diseyi Philomena</h1>
        <h2 className="color-yellow font-semibold my-2 text-3xl">Software Engineer (Front-End) </h2>
        <div className="my-10 paragraph leading-6">
          <p className="">
            As a <span className="color-yellow"> Software Engineer</span>  with a background in Chemical Science,
            I have a unique perspective and set of skills that make me well-suited to the challenges of software engineering.
            My strong foundation in problem-solving and analytical thinking, developed through my studies in chemical science,
            allows me to approach complex technical challenges with confidence and creativity.
          </p>
          <br />
          <p className="">
            In my free time, I write Poems which are focused on helping people build healthy self-identity.
            My creativity and passion for helping others make me a well-rounded and valuable member of my team,
            and my unique perspective can help drive innovation and develop new solutions to complex technical challenges.
          </p>
          <p className="text-xl my-8 ">
            Technology
            <br />
            <span className=" text-sm color-yellow">
              JavaScript, TypeScript, React, Vue, Nodejs, Express, Python, MongoDB
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <a href="https://drive.google.com/file/d/14rgTgfoXb5zl4B0YIu-31u_GyUaYHagT/view?usp=drivesdk" target="blank">
            <button className=" button rounded text-xl font-bold py-2 px-8 text-sm my-6  ">
              Resume
            </button>
          </a>

          <a href="mailto:filomiinaa@gmail.com" className="">
            <button className=" button rounded text-xl font-bold py-2 px-8 text-sm my-6  ">
              Connect with me
            </button>
          </a>

        </div>

        <div className="flex items-center gap-6 my-4 ">
          <a href="https://github.com/diseyi" target="blank" className="">
            <div className=" w-6 h-6 cursor-pointer">
              <img src={github} alt="" className="w-6 h-6" />
            </div>
          </a>

          <a href="https://twitter.com/diseyi_" target="blank" className="">
            <div className=" w-6 h-6 cursor-pointer">
              <img src={twitter} alt="" className="w-6 h-6" />
            </div>
          </a>

          <a href="https://instagram.com/diseyi_" target="blank" className="">
            <div className=" w-6 h-6 cursor-pointer">
              <img src={instagram} alt="" className="w-6 h-6" />
            </div>
          </a>


          <a href="https://ng.linkedin.com/in/diseyi-philomena" target="blank" className="">
            <div className=" w-6 h-6 cursor-pointer">
              <img src={linkedin} alt="" className="w-6 h-6" />
            </div>
          </a>

          <a href="https://diseyi.medium.com" target="blank" className="">
            <div className=" w-6 h-6 cursor-pointer">
              <img src={medium} alt="" className="w-6 h-6" />
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default App
