import { Link } from "@remix-run/react"

const Contacts = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <Link target="_blank" to="https://github.com/nabinkatwal7" >github</Link>
      <Link target="_blank" to="https://linkedin.com/in/nabin-katwal-1b4a94182" >linkedin</Link>
      <Link target="_blank" to="https://instagram.com/nabinkatwal7" >instagram</Link>
      <Link target="_blank" to="https://x.com/barcaornone" >x</Link>
    </div>
  )
}

export default Contacts
