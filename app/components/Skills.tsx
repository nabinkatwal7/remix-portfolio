
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "go",
    },
    {
      id: 2,
      name: "python",
    },
    {
      id: 3,
      name: "javascript",
    },
    {
      id: 4,
      name: "typescript",
    },
    {
      id: 5,
      name: "rust",
    },
    {
      id: 6,
      name: "c++",
    },
    {
      id: 7,
      name: "c",
    },
    {
      id: 8,
      name: "html",
    },
    {
      id: 9,
      name: "css",
    },
    {
      id: 10,
      name: "react",
    },
    {
      id: 11,
      name: "tailwind",
    },
    {
      id: 12,
      name: "next",
    },
    {
      id: 13,
      name: "git",
    },
    {
      id: 14,
      name: "azure",
    },
    {
      id: 15,
      name: "bash",
    },
    {
      id: 16,
      name: "arch",
    },
    {
      id: 17,
      name: "neovim",
    },
    {
      id: 18,
      name: "htmx",
    },
    {
      id: 19,
      name: "mantine",
    },
    {
      id: 20,
      name: "framer",
    },
  ]
  return (
    <div className='main__container font-courier' >
      <section className="enable-animation w-full overflow-x-hidden bg-secondary text-primary">
        <div className='marquee flex flex-row  w-full justify-evenly'>
          <ul className='marquee__content flex flex-row gap-2 w-full justify-evenly'>
            {skills.map((skill) => (
              <div key={skill.id} className='marquee__item'>
                <p>{skill.name}</p>
              </div>
            ))}
            {skills.map((skill) => (
              <div key={skill.id} className='marquee__item'>
                <p>{skill.name}</p>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Skills
