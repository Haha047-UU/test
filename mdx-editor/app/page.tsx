import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('./EditorComponent'), { ssr: false })

const markdown = `
Hello **world**!
`
const markdown1 = `
It is a *test*！
`
export default function Home() {
  return (
    <>
      <br />
      <div style={{ border: '1px solid black' }}>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown} />
        </Suspense>
      </div>
      <br />
      <div style={{ border: '1px solid blue' }}>
        <Suspense fallback={null}>
          <EditorComp markdown={markdown1} />
        </Suspense>
      </div>
    </>
  )
}
