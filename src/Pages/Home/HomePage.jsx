import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Contact from "../Contact/Contact";
import ArtCraft from "./ArtCraft/ArtCraft";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";
import ArtCraftCategory from "./ArtCraftCategory/ArtCraftCategory";

const HomePage = () => {

  const loadedItems = useLoaderData();
  console.log(loadedItems);
  
  return (
    <div className="max-w-7xl mx-auto">
     <Helmet>
      <title>Arts & Craft | Home </title>
    </Helmet>
     <Banner/>
     <ArtCraft
     loadedItems = {loadedItems}
     ></ArtCraft> 
     <ArtCraftCategory></ArtCraftCategory>
     <Blog></Blog>
     <Contact></Contact>
    </div>
  );
};

export default HomePage;
