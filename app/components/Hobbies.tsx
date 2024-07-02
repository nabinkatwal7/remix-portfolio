import { FlipWords } from "./ui/FlipWords"

const Hobbies = () => {
  const words = ["games", "football", "formula 1", "web series", "anime", "code", "manchester united", "fc barcelona", "travel"]
  return (
    <div className="text-3xl flex flex-row justify-center items-center" >
      <p>I love <FlipWords words={words} />, get in touch with me</p>
    </div>
  )
}

export default Hobbies
