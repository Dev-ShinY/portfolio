import Section1 from "../(sections)/section1";
import Section2 from "../(sections)/section2";
import Section3 from "../(sections)/section3";
import Section4 from "../(sections)/section4";
import Section5 from "../(sections)/section5";

export default function Page() {
  return (
    <>
      {/* introduce me */}
      <Section1 />

      {/* interview */}
      <Section2 />

      {/* my skills */}
      <Section3 />

      {/* my projects */}
      <Section4 />

      {/* ThankYouSection */}
      <Section5 />
    </>
  );
}
