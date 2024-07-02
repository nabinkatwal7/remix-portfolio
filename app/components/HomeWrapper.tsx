import Experience from "./Experience"
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
        <div>education</div>
        <div>contact</div>
      </div>
    </div>
  )
}

export default HomeWrapper
