import { React, useState } from "react"
import home_image from ".././images/bg2.png"
import pfp from ".././images/transparent_pfp.png"

export default function Home() {

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  function sendEmail(event) {
    event.preventDefault();
    console.log(formName)
    console.log(formEmail)
    console.log(formMessage)
  }



  return (
    <div>
      <div className="h-[1050px] flex flex-col" style={{backgroundImage: `url(${home_image})`}} id="background-div">
        <div className="fixed mt-64 mx-auto left-[13%]" >
          <img className="h-80 w-80" src={pfp} id="avatar"/>
        </div>
        <div className="w-[70%] flex justify-end mt-64">
          <h1 className="text-[5rem] drop-shadow-lg" id="heading">geeb.dev</h1>
        </div>
      </div>
      <div className="w-[100%] h-[1000px] bg-slate-500 flex flex-row">
        <div className="w-[40%] mt-48">
          
        </div>
        <div className="w-[50%] mt-48 flex flex-col bg-white h-[600px] rounded-lg p-5" id="card-div-shadow">
          <h1 className="mx-auto text-[4rem]">hello, I'm 0xgeeb</h1>
          <p>hello Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam deserunt molestias, reiciendis minus ipsum dolor error atque quidem vero vel ducimus, eligendi repellendus? At eos eaque illo quidem nobis alias?</p>
        </div>
      </div>
      <div className="h-[600px] lg:ml-36 mb-48">
        <div className="flex flex-row w-5/6 h-[500px] justify-center mt-16 mx-auto">
          <div className="flex flex-col mx-auto w-[25%]">
            
          </div>
          <form className="mx-auto w-[50%] flex flex-col" onSubmit={sendEmail}>
            <h1 className="w-5/6 flex justify-center text-[2rem]">Contact Me</h1>
            <p className="w-5/6 mt-3 flex justify-center mb-8">feel free to reach out to me using this form or on social media</p>
            <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6" type="text" value={formName} placeholder="Name" onChange={(e) => setFormName(e.target.value)}/>
            <input className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6" type="text" value={formEmail} placeholder="Email" onChange={(e) => setFormEmail(e.target.value)}/>
            <textarea className="rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-5/6 h-48" id="message-box" value={formMessage} placeholder="Message" onChange={(e) => setFormMessage(e.target.value)}/>
            <button className="rounded-xl px-3 bg-slate-200 hover:bg-slate-400 mt-5 w-1/4 h-14 lg:h-10">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  )
}