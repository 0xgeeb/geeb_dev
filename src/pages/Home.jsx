import { React, useState } from "react"
import axios from "axios"
import home_image from ".././images/bg2.png"
import pfp from ".././images/transparent_pfp.png"
import ctb from ".././images/ctb.png"
import rap from ".././images/rap.png"
import yelp from ".././images/yelp.png"
import copy from ".././images/copy.png"
import eth from ".././images/eth.png"
import twitter from ".././images/twitter.png"

export default function Home() {

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setFormError(true);
    }
    else {
      setFormError(false);
      const emailObject = {
        'from_name': formName,
        'reply_email': formEmail,
        'message': formMessage
      }
      await axios.post('/minecraftspeedrun/email', emailObject);
    }  
  }

  return (
    <div id="top-section">
      <div className="h-[1800px] lg:h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">
        <div className="lg:fixed mt-48 lg:mt-64 mx-auto left-[13%]" >
          <img className="h-80 lg:w-80" src={pfp} id="avatar"/>
        </div>
        <div className="w-[70%] flex justify-end mt-12 lg:mt-64">
          <h1 className="text-[5rem] drop-shadow-lg" >geeb.dev</h1>
        </div>
      </div>
      <div className="sm:px-10 w-[100%] h-[1900px] lg:h-[1000px] bg-slate-500 flex flex-row" id="about-section">
        <div className="w-[40%] mt-[600px] lg:mt-48">
          
        </div>
        <div className="w-[100%] lg:w-[50%] mt-[600px] lg:mt-48 flex flex-col bg-white h-[600px] rounded-lg p-5" id="card-div-shadow">
          <h1 className="mx-auto text-[4rem]">hello, I'm 0xgeeb</h1>
          <h3 className="mt-8 px-8 font-bold text-[1.5rem]">about me</h3>
          <p className="mt-2 px-8">I'm an aspiring software developer that is focused on building innovative smart contracts with full-stack web applications for users to access the decentralized products/services. I wrote my first print hello world program in mid 2021 and have been teaching myself software development since. I am most interested in and learning about smart contract development, full-stack web development, MEV searching, game development, & cybersecurity.</p>
          <h3 className="mt-8 px-8 font-bold text-[1.5rem]">my skills</h3>
          <div className="mt-4 px-8 flex flex-row space-x-4">
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Solidity</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">JavaScript</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">HTML</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">CSS</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Python</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Java</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">SQL</div>
          </div>
          <div className="mt-4 px-8 flex flex-row space-x-4">
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">React</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Tailwinds</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Bootstrap</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Express</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Node</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">MongoDB</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Docker</div>
          </div>
          <div className="mt-4 px-8 flex flex-row space-x-4">
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Hardhat</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Foundry</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Brownie</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Ethers.js</div>
            <div className="bg-slate-200 hover:bg-slate-400 w-24 p-2 flex justify-center rounded">Cairo</div>
          </div>
        </div>
      </div>
      <div className="sm:px-10 h-[3800px] w-[100%] flex flex-row bg-violet-400" id="projects-section">
        <div className="lg:w-[30%]">

        </div>
        <div className="w-[100%] lg:w-[70%] flex flex-col">
          <h1 className="mt-24 mx-auto text-[4rem] bg-white px-5 rounded-lg" id="card-div-shadow">my projects</h1>
          <div className="w-[100%] lg:w-[70%] mt-24 mx-auto flex flex-col bg-white h-[600px] rounded-xl p-8" id="card-div-shadow">
            <h1 className="mx-auto text-[2rem] font-bold border-b-2 border-black">Cook the Books</h1>
            <p className="text-center mx-auto mt-8 w-[75%]">Provides users with arbitrage opportunities within sports betting markets. Users must mint NFT to use the application. Built using React, Tailwinds, Ethers & Hardhat.</p>
            <img className="h-80 w-100 mx-auto mt-8" src={ctb} />
            <a className="mx-auto text-blue-500 underline mt-8" href="https://cookthebooks.xyz" target="_blank">cookthebooks.xyz</a>
          </div>
          <div className="w-[100%] lg:w-[70%] mt-24 mx-auto flex flex-col bg-white h-[600px] rounded-xl p-8" id="card-div-shadow">
            <h1 className="mx-auto text-[2rem] font-bold border-b-2 border-black">Speed Run Ethereum</h1>
            <p className="text-center mx-auto mt-8 w-[75%]">Challenges created by Austin Griffith to test your ethereum development skills. While completing the challenges, I built a staking platform, token vendor, rigged dice game & a simplified dex. Built using React & Hardhat.</p>
            <img className="h-80 w-100 mx-auto ml-18 mt-8" src={eth} />
            <a className="mx-auto text-blue-500 underline mt-4" href="https://github.com/0xgeeb/speedrun_eth" target="_blank">github.com/0xgeeb/speedrun_eth</a>
          </div>
          <div className="w-[100%] lg:w-[70%] mt-24 mx-auto flex flex-col bg-white h-[625px] rounded-xl p-8" id="card-div-shadow">
            <h1 className="mx-auto text-[2rem] font-bold border-b-2 border-black">Rap Defender</h1>
            <p className="text-center mx-auto mt-8 w-[75%]">Turn based NFT game with rappers as characters. Followed along with the Buildspace project while working on this game. Built using React, Ethers & Hardhat.</p>
            <img className="h-80 w-100 mx-auto mt-8" src={rap} />
            <a className="mx-auto text-blue-500 underline mt-8" href="https://github.com/0xgeeb/rap_defender" target="_blank">github.com/0xgeeb/rap_defender</a>
          </div>
          <div className="w-[100%] lg:w-[70%] mt-24 mx-auto flex flex-col bg-white h-[600px] rounded-xl p-8" id="card-div-shadow">
            <h1 className="mx-auto text-[2rem] font-bold border-b-2 border-black">Yelp Camp</h1>
            <p className="text-center mx-auto mt-8 w-[75%]">Website for users to post and review campgrounds. Followed along with Colt Steele's Web Developer Bootcamp while working on this website. Built using Bootstrap, Express, Node, Mongo & Cloudinary.</p>
            <img className="h-80 w-100 mx-auto mt-8" src={yelp} />
            <a className="mx-auto text-blue-500 underline mt-8" href="https://github.com/0xgeeb/yelp_camp" target="_blank">github.com/0xgeeb/yelp_camp</a>
          </div>
          <div className="w-[100%] lg:w-[70%] mt-24 mx-auto flex flex-col bg-white h-[600px] rounded-xl p-8" id="card-div-shadow">
            <h1 className="mx-auto text-[2rem] font-bold border-b-2 border-black">Copy Tweet</h1>
            <p className="text-center mx-auto mt-8 w-[75%]">Program to copy another twitter account's tweets exactly. Will check the target account every 5 minutes for new tweets and copy the tweets and tweet them. Built using Python, Tweepy & deta.sh.</p>
            <img className="h-80 w-100 mx-auto mt-8" src={copy} />
            <a className="mx-auto text-blue-500 underline mt-8" href="https://github.com/0xgeeb/copy_tweet" target="_blank">github.com/0xgeeb/copy_tweet</a>
          </div>
        </div>
      </div>
      <div className="h-[555px] mt-36 mb-48" id="contact-section">
        <div className="flex flex-row w-5/6 h-[500px] justify-center mt-16 mx-auto">
          <div className="flex flex-col mx-auto lg:w-[25%]">
            
          </div>
          <form className="mx-auto sm:ml-20 w-[100%] lg:w-[50%] flex flex-col" onSubmit={sendEmail}>
            <h1 className="w-5/6 flex justify-center text-[3rem]">contact me</h1>
            <div className="w-5/6 flex justify-center flex-row mt-3 mb-8">
              <p className="">feel free to reach out to me using this form or on twitter</p>
              <a className="hover:opacity-50" href="https://twitter.com/0xgeeb" target="_blank"><img className="ml-1 w-7 h-7" src={twitter} /></a>
            </div>
            <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6" type="text" value={formName} placeholder="Name" onChange={(e) => setFormName(e.target.value)}/>
            <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6" type="text" value={formEmail} placeholder="Email" onChange={(e) => setFormEmail(e.target.value)}/>
            <textarea className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6 h-48" id="message-box" value={formMessage} placeholder="Message" onChange={(e) => setFormMessage(e.target.value)}/>
            <div className="flex flex-row items-center">
              <button className={`rounded-xl px-3 ${formError ? "bg-red-500" : "bg-slate-200"} mt-5 w-1/4 h-14 lg:h-10 hover:bg-slate-400`}>Send Email</button>
              <div className={`mt-5 px-5 ${formError ? "text-red-500" : "text-white"}`}>plz enter name, email, & message</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}