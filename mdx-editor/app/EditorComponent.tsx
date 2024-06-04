"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin } from "@mdxeditor/editor";
import { FC } from "react";

interface EditorProps { //接口，编译器组件的属性
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      plugins={[headingsPlugin()]}
    />
  );
};

export default Editor;
