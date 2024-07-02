import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 font-courier">
      <div className="hidden lg:flex">
        <p>
          ░▒▓███████▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
          ░▒▓█▓▒░░▒▓█▓▒░
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl" >i am nabin</p>
        <TextGenerateEffect words="web developer by day, data magician by night. i translate complex ideas into stunning, user-friendly web applications using next.js, react, and tailwind. when not building interfaces, i'm exploring the world of go, python and machine learning, extracting insights and adding a touch of intelligence to my projects. fluent in neovim, git, collaborating and version controlling like a pro. Let's code some magic together!" />
        <p className="text-xs italic" >"live long and prosper"</p>
      </div>
    </div>
  )
}

export default Introduction
