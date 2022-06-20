import Link from "next/link"

const Title = () => {
  return <Link href='/'>
    <a>
      <h1 className="text-purple-600 text-lg">Info<span className="px-1 py-1 bg-purple-600 text-purple-200 ml-1 rounded-md">Webs</span></h1>
    </a>
  </Link>
}

export default Title