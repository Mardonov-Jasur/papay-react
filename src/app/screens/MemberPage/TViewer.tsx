import { Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

const TViewer = (props: any) => {
  const editorRef = useRef(null);
  console.log("chooooosen", props.chosenSingleBoArticle?.art_content);

  return (
    <Stack className="tviewer">
      <Viewer
        ref={editorRef}
        initialValue={props.chosenSingleBoArticle?.art_content}
      />
    </Stack>
  );
};

export default TViewer;
