import './App.css'
import fondo from './assets/fondo.jpg'

const redes = [
  {
    nombre: 'OnlyFans',
    id: "of",
    url: "https://onlyfans.com/johabettina",
  },
  {
    nombre: "Telegram",
    id: 'te',
    url: "https://t.me/+yHpq52XO4dZlNDdh",

  },
  {
    nombre: "Twitter X",
    id: 'x',
    url: "http://twitter.com/johabettina",

  },
  {
    nombre: "Instagram",
    id: 'ig',
    url: "https://www.instagram.com/johabettina/",
  },
  {
    nombre: "TikTok",
    id: 'ttk',
    url: "https://www.tiktok.com/@johannabettina",

  },
 
];

const iconos = {

of: (
    <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="currentColor">
      <path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z" />
      </svg>
  ),
te: (
  <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="currentColor">
    <path transform='scale(0.05)' d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
    </svg>

),

x: (
  
  <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="currentColor" >
    <path transform='scale(0.05)' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>

),

ig: (

      <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="currentColor">
        <path transform='scale(0.05)' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>

),

ttk: (
       <svg viewBox="0 0 24 24" width="1.2rem" height="1.2rem" fill="currentColor">
        <path transform='scale(0.05)' d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
        </svg>

),

};


function Button() {
  return redes.map((red) => (
    <li key={red.id} className="w-full flex flex-col items-center text-base">
      <a
        href={red.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center"
      >
        <button
          className="relative w-full flex justify-between items-center px-4 py-4 border-2 border-red-400 rounded-lg uppercase font-Fredoka font-medium bg-gradient-to-t from-gray-600/60 to-transparent hover:scale-105 transition text-shadow-lg text-shadow-red-800"
        >
          <span className="w-[1.2rem] h-[1.2rem] flex justify-center items-center">
            {iconos[red.id]}
          </span>
          <span className="place-self-center">{red.nombre}</span>
          <span className="w-[1.2rem] h-[1.2rem] flex justify-center items-center">
            {iconos[red.id]}
          </span>
        </button>
      </a>
    </li>
  ));
}

function Test(){

  return (
  <button className="bg-gradient-to-t from-gray-600/60 to-transparent h-16 w-full text-white">
  Gradient Test
</button>
);
}








function Lista(){



  return (

   <ul style={ {height: "350px", paddingTop: '60px'} } className='flex flex-col gap-5 items-center justify-evenly w-full font-Monserrat scroll-smooth relative overflow-scroll no-scrollbar font-extrabold tracking-widest text-lg'><Button></Button></ul>

  );

}


function App() {
  

  return (
    <div className='p-5 relative flex items-center justify-center w-full h-dvh'>
      
      <div className='shadow-Frame font-Cormorant italic rounded-lg h-full  w-full md:w-2/3 lg:w-1/3 xl:3/4 relative flex items-center justify-center'>
      
        <img src={fondo} alt="" className=' top-0 rounded-lg absolute left-0 w-full h-full object-cover' />

      <div className='bg-transparent rounded-lg w-full h-full flex absolute top-0 left-0 justify-center items-end'>

        <div id='manejaColorTexto' className=' text-white pt-20 overflow-y-auto rounded-lg overflow-hidden px-4 h-full relative flex flex-col gap-6  items-start  w-full '> 
          
          <div id='texto' style={ {paddingLeft: "190px"} } >
          
          <h1 style={{fontFamily: 'Fredoka'}} className='text-shadow-red-800 text-shadow-lg text-4xl leading-[1.2]'>Joha Bettina</h1>
          
          </div>

          
          {Lista()}
          
    
    </div>   
    </div>
    </div> 
    </div>
  )
}

export default App
