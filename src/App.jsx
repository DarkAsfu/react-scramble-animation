import Banner from "./components/Banner";
import TestSection from "./components/TestSection";
import TitleAnimation from "./components/TitleAnimation";

const App = () => {
  return (
    <div className="bg-black">
      <Banner />
      <section className="w-11/12 md:w-6/12 mx-auto mt-10">
        <TitleAnimation title={'First Heading'} />
        <TestSection/>
        <TitleAnimation title={'Second Heading'} />
        <TestSection/>
        <TitleAnimation title={'Third Heading'} />
        <TestSection/>
        <TitleAnimation title={'Fourth Heading'} />
        <TestSection/>
      </section>
    </div>
  );
};

export default App;