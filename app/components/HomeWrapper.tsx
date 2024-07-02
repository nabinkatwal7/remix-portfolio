import Contacts from "./Contacts"
import Education from "./Education"
import Experience from "./Experience"
import Hobbies from "./Hobbies"
import Introduction from "./Introduction"
import Projects from "./Projects"
import Skills from "./Skills"

const HomeWrapper = () => {
  return (
    <div className="bg-primary text-secondary flex flex-col items-center font-courier">
      <div className="w-full lg:w-[60%] h-full flex flex-col gap-4 border-x border-dashed border-secondary p-4" >
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Hobbies />
        <Contacts />
      </div>
    </div>
  )
}

export default HomeWrapper
