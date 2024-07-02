import moment from "moment"

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">experience</p>
      <div className="flex flex-col gap-1 animate-pulse px-4">
        <p>frontend developer</p>
        <p className="text-xs italic" >2023-present <span>({moment().diff("2023-08-01", "months")} months)</span> </p>
        <p>aitc international, nepal</p>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <p>frontend developer</p>
        <p className="text-xs italic" >2022-2023 <span>({moment("2023-08-01").diff("2022-7-25", "months")} months)</span> </p>
        <p>gyan bazzar online pvt. ltd, nepal</p>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <p>freelance web developer</p>
        <p className="text-xs italic" >2019-2022 <span>({moment("2022-05-01").diff("2019-01-01", "months")} months)</span>  </p>
        <p>upwork (remote), nepal</p>
      </div>
    </div>
  )
}

export default Experience
