import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
    <Navbar></Navbar>
      <Hero 
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      title="Transforming lives since 1990"
      text="WHERE CURIOUS MINDS EXPLORE, ENGAGE, AND CONNECT.

      Capitol Hill Day School is one of the DC area’s leading schools, offering a distinctive and progressive approach to learning that engages students in the classroom and with the world around them."
      
      
      ></Hero>
    </>
  );
}

export default Home;