

import FoodCard from "@/components/FoodCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StreetFoodSection from "@/components/StreetFoodSection";

export default function RootLayout({children}){
  return(
    <>
    <Header/>
    <br></br><br></br>
    <StreetFoodSection/>
      
    {children}

    <Footer/>
    <FoodCard/>
    
    </>
  )
}



    
    