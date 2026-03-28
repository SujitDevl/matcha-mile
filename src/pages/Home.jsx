import Hero from "../components/home/Hero";
import ImageFeature from "../components/home/ImageFeature";
import FeaturedCoffees from "../components/home/FeaturedCoffees";

import CTA from "../components/home/CTA";
import Gallery from "../components/home/Gallery";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <ImageFeature />
      <FeaturedCoffees />
      <Gallery />
      <CTA />
    </>
  );
}

export default Home;
