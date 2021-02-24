import Head from "next/head"
import { InputGroup, FormControl } from "react-bootstrap"
import { atom, useAtom } from "jotai"
import marked from "marked"
import styles from "../styles/TextInput.module.css"

const textInputAtom = atom(`
# Hello

## Welcome

This is some \`console.log("Inline code!")\`

\`\`\`
And this is a code block!
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![Image test](https://via.placeholder.com/150/92c952)
`)

export default function Home() {
  const [input, setInput] = useAtom(textInputAtom)

  return (
    <div>
      <Head>
        <title>Markdown Previewer</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          defer
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        /> */}
      </Head>

      <main className="py-3 px-3 row">
        <InputGroup className="col-sm-6">
          <FormControl
            as="textarea"
            id="editor"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.textarea}
          />
        </InputGroup>

        <div
          id="preview"
          className="col-sm-6"
          dangerouslySetInnerHTML={{
            __html: marked(input),
          }}
        />
      </main>
    </div>
  )
}
