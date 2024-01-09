import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
import Typography from "@mui/joy/Typography";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["image", "table", "link"],
  ["ul", "ol", "task"]
];
const hooks = {
  addImageBlobHook: async (image: any, callback: any) => {
    return false;
  }
};

const events = { load: function (param: any) {} };

const TuiEditor = (props: any) => {
  const editorRef = useRef(null);

  return (
    <Stack className="writing_article">
      <Stack className="header_sec">
        <Box className="form_category">
          <Typography className="category">Category</Typography>
          <FormControl className="form_control">
            <Select
              value={"celebrity"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem>Categoriyani tanlang</MenuItem>
              <MenuItem value={"celebrity"}>Mashxurlar</MenuItem>
              <MenuItem value={"evaluation"}>Restaurant baho</MenuItem>
              <MenuItem value={"story"}>Mening hikoyam</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form_category">
          <Typography className="category">Mavzu</Typography>
          <TextField
            id="filled-basic"
            label="Mavzu"
            variant="filled"
            className="form_control"
          />
        </Box>
      </Stack>
      <Editor
        ref={editorRef}
        initialValue="Type here "
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        toolbarItems={toolbarItems}
        hooks={hooks}
        events={events}
        initialEditType="wysiwyg"
        usageStatistics={false}
      />
      <Box className="reg_btn">
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Box>
    </Stack>
  );
};

export default TuiEditor;
