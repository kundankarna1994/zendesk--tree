import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";

const Editor = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default Editor;
