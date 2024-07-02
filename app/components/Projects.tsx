const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">projects</p>
      <div className="flex flex-wrap gap-4 px-4">
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>fantasy football and live scores</p>
          <p>project created with next js and express, using football score api</p>
        </div>
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>music recommendation system</p>
          <p>music recommendation system made using react and python</p>
        </div>
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>gyan bazzar online platform</p>
          <p>research papers aggregator</p>
        </div>
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>e learning web platform</p>
          <p>e learning web platform created with next js</p>
        </div> <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>blog backend</p>
          <p>rest api created in go</p>
        </div>
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>solaris</p>
          <p>planetary motion simulated in pygame</p>
        </div>
        <div className="hover:bg-secondary hover:text-primary hover:p-1 transition-all duration-300 w-[400px]" >
          <p>physica</p>
          <p>mathematical simulation in go</p>
        </div>

      </div>
    </div>
  )
}

export default Projects
