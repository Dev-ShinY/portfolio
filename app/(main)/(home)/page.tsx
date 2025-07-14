import Section1 from "../(sections)/Section1";
import Section2 from "../(sections)/Section2";
import Section3 from "../(sections)/Section3";
import Section4 from "../(sections)/Section4";
import Section5 from "../(sections)/Section5";

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
