import { readFileSync } from 'fs'
import path from 'path'

export default function _({ text }) {
  return (
    <div>
      <h1>next-webpack-5-fs-bug</h1>
      <p>{text}</p>
    </div>
  )
}

export function getServerSideProps() {
  const text = readFileSync(path.resolve(process.cwd(), 'data/second.txt'), { encoding: 'utf-8' })

  return { props: { text }}
}
