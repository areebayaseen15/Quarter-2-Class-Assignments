import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Sponser from "./components/sponser";
import Footer from "./components/footer";


export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero
        heading="Get More DONE WITH WHITESPACE"
        paragraph=" Project management software that enables your teams to 	collaborate plan
						 analyze and manage everyday tasks"
             backgroundColor="#043873"
             color="#ffff"
             imageContainer="w-[824px] h-[549px] bg-[#C4DEFD] hover:scale-105 transition duration-300"
             btnstyle="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] font-bold hover:bg-[#C4DEFD]"
             btnText = "TRY SPACE FREE"
          

       
         />
   		<Hero
        heading="PROJECT MANAGEMENT"
        paragraph="Images , Videos , PDFs , and audio filesa are supported.Create math expressions and diagrams
        directly from the app.Take Photos eith the mobuile app and save them to a note."
             backgroundColor="#ffff"
             color="black"
             imageContainer="w-[748px] h-[547px] bg-[#C4DEFD] ml-4 hover:scale-105 transition duration-300"
             btnstyle="w-[201px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] text-white font-bold hover:bg-[#C4DEFD]"
              btnText="GET STARTED  -> "
       
         />

         
         <Hero
        heading="WORK TOGETHER"
        paragraph="With whitespace share your notes with your collegues and collaborates on them.You can also publish a 
        note to the internet and and share the URL with others."
             backgroundColor="#ffff"
             color="black"
             imageContainer="w-[748px] h-[547px] bg-[#ffff] ml-4 hover:scale-105 transition duration-300"
             btnstyle="w-[201px] h-[63px] rounded-lg px-[40px] py-5 gap-[10px] bg-[#4F9CF9] text-white  font-bold hover:bg-[#C4DEFD]"
              btnText="TRY IT NOW  -> "
              reverse={true}
              showImage={true} 
              imageSrc="/assests/image.png"
       
         />

<Hero
        heading="USE AS EXTENSION"
        paragraph="Use the web clipper extension , available on chrome and firefox to save webpages or take screenshot
        or notes."
             backgroundColor="#043873"
             color="#ffff"
             imageContainer="w-[748px] h-[547px] bg-[#C4DEFD] ml-4 hover:scale-105 transition duration-300"
             btnstyle="w-[201px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] text-white font-bold hover:bg-[#C4DEFD]"
              btnText="LETS GO  -> "
       
         />
         
         
         <Hero
        heading="Customise it to your needs"
        paragraph="Customise the app with plugins, custome theme and multiple text editors (Rich Text or Markdown),
        or create your own scripts and plugins using the Extension Api"
             backgroundColor="#ffff"
             color="black"
             imageContainer="w-[748px] h-[547px] bg-[#C4DEFD] mr-10  hover:scale-105 transition duration-300"
             btnstyle="w-[171px] h-[63px] rounded-lg px-[40px] py-5 gap-[10px] bg-[#4F9CF9] text-white  font-bold hover:bg-[#C4DEFD]"
              btnText="LETS GO  -> "
              reverse={true}
             
         />
         <Work/>
         <Sponser/>
         <Footer/>
		</div>
	);
}