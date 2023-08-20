import AboutMe from "./AboutMe";
import AboutProject from "./AboutProject";
import NavTab from "./NavTab";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
import Techs from "./Techs";

function Main() {
    return (
        <main>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;
