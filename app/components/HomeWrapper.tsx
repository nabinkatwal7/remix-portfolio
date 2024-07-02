import Introduction from "./Introduction"
import Skills from "./Skills"

const HomeWrapper = () => {
  return (
    <div className="bg-primary text-secondary flex flex-col items-center h-screen font-bona">
      <div className="w-full lg:w-[60%] h-full flex flex-col gap-4 border-x border-dashed border-secondary p-4" >
        <Introduction />
        <Skills />
        <div>experience</div>
        <div>projects</div>
        <div>education</div>
        <div>contact</div>
      </div>
    </div>
  )
}

export default HomeWrapper
