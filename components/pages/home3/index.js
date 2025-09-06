import Section1 from "./section1"
import Section10 from "./section10"
import Section11 from "./section11"
import Section12 from "./section12"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"
import Section8 from "./section8"
import Section9 from "./section9"
import Section13 from "./section13"
import Section14 from "./section14"
import Section15 from "./section15"
import RentAccountantForm from "@/components/resuable/rentAccountantForm"
import RegistrationForm from "@/components/resuable/registerationForm"
import OfficeLocations from "@/components/resuable/officeLocations"
import Platforms from "@/components/resuable/platforms"

export default function Home3() {

	return (
		<>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section13/>
			<Section9 />
			<Platforms/>
			<Section5 />
			{/* <Section4 /> */}

			{/* <Section6 /> */}
			<Section14 />
			{/* <Section7 /> */}
			<RentAccountantForm/>
			<RegistrationForm/>

			<Section8 />
			
			<Section10 />
			<Section11 />
			<Section12 />
			<OfficeLocations/>
		</>
	)
}