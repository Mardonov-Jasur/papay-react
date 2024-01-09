import React, { useCallback, useRef, useState } from "react";
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
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";
import CommunityApiService from "../../apiservices/communityApiService";
import { BoArticleInput } from "../../../types/boArticle";

const TuiEditor = (props: any) => {
  /**INITIALIZATIONS */
  const { setValue, setArticlesRebuild } = props;
  const editorRef = useRef(null);
  const history = useHistory();
  const [communityArticleData, setCommunityArticleData] =
    useState<BoArticleInput>({
      art_subject: "",
      bo_id: "",
      art_content: "",
      art_image: ""
    });
  const events = { load: function (param: any) {} };
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["image", "table", "link"],
    ["ul", "ol", "task"]
  ];

  /**HANDLERS */

  const uploadImage = async (image: any) => {
    try {
      const communityService = new CommunityApiService();
      const image_name = await communityService.uploadImageToServer(image);
          console.log("mage-nameeeee", image_name);
      communityArticleData.art_image = image_name;
      setCommunityArticleData({ ...communityArticleData });

      const source = `${serverApi}/${image_name}`;
      return source;
    } catch (err) {
      console.log(`ERROR ::: uploadImage, ${err}`);
    }
  };

  const changeCategoryHandler = useCallback(
    (e: any) => {
      communityArticleData.bo_id = e.target.value;
      setCommunityArticleData({ ...communityArticleData });
    },
    [communityArticleData.bo_id]
  );

  const changeTitleHandler = (e: any) => {
    communityArticleData.art_subject = e.target.value;
    setCommunityArticleData({ ...communityArticleData });
    console.log("test", communityArticleData.art_subject);
  };

  const handleRegisterButton = async () => {
    try {
      const editor: any = editorRef.current;
      const art_content = editor?.getInstance().getHTML();
      communityArticleData.art_content = art_content;
      assert.ok(
        communityArticleData.art_content !== "" &&
          communityArticleData.bo_id !== "" &&
          communityArticleData.art_subject !== "",
        Definer.input_err1
      );
      const communityService = new CommunityApiService();
      await communityService.createArticle(communityArticleData);
      await sweetTopSmallSuccessAlert("Article is created successfull");
      setValue("1");
      setArticlesRebuild(new Date());
    } catch (err) {
      console.log(`ERROR ::: handleRegisterButton, ${err}`);
    }
  };

  const addImageHook = {
    addImageBlobHook: async (image: any, callback: any) => {
      const uploadImageURL = await uploadImage(image);
      console.log("uploadimage", uploadImageURL);
      callback(uploadImageURL);

      return false;
    }
  };

  return (
    <Stack className="writing_article">
      <Stack className="header_sec">
        <Box className="form_category">
          <Typography className="category">Category</Typography>
          <FormControl className="form_control">
            <Select
              value={communityArticleData?.bo_id}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={changeCategoryHandler}>
              <MenuItem value="">Categoriyani tanlang</MenuItem>
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
            value={communityArticleData?.art_subject}
            onChange={changeTitleHandler}
          />
        </Box>
      </Stack>
      <Editor
        ref={editorRef}
        initialValue=" "
        placeholder="Type here"
        previewStyle="vertical"
        height="440px"
        toolbarItems={toolbarItems}
        hooks={addImageHook}
        events={events}
        initialEditType="wysiwyg"
        usageStatistics={false}
      />
      <Box className="reg_btn">
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegisterButton}>
          Register
        </Button>
      </Box>
    </Stack>
  );
};

export default TuiEditor;

// import React, { useRef } from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   MenuItem,
//   Select,
//   Stack,
//   TextField
// } from "@mui/material";
// import Typography from "@mui/joy/Typography";
// import { Editor } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";

// const toolbarItems = [
//   ["heading", "bold", "italic", "strike"],
//   ["image", "table", "link"],
//   ["ul", "ol", "task"]
// ];
// const hooks = {
//   addImageBlobHook: async (image: any, callback: any) => {
//     return false;
//   }
// };

// const events = { load: function (param: any) {} };

// const TuiEditor = (props: any) => {
//   /**INITIALIZATIONS */
//    const editorRef = useRef(null);
//   /**HANDLERS */

//   return (
//     <Stack className="writing_article">
//       <Stack className="header_sec">
//         <Box className="form_category">
//           <Typography className="category">Category</Typography>
//           <FormControl className="form_control">
//             <Select
//               value={"celebrity"}
//               displayEmpty
//               inputProps={{ "aria-label": "Without label" }}>
//               <MenuItem>Categoriyani tanlang</MenuItem>
//               <MenuItem value={"celebrity"}>Mashxurlar</MenuItem>
//               <MenuItem value={"evaluation"}>Restaurant baho</MenuItem>
//               <MenuItem value={"story"}>Mening hikoyam</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <Box className="form_category">
//           <Typography className="category">Mavzu</Typography>
//           <TextField
//             id="filled-basic"
//             label="Mavzu"
//             variant="filled"
//             className="form_control"
//           />
//         </Box>
//       </Stack>
//       <Editor
//         ref={editorRef}
//         initialValue="Type here "
//         placeholder="Type here"
//         previewStyle="vertical"
//         height="640px"
//         toolbarItems={toolbarItems}
//         hooks={hooks}
//         events={events}
//         initialEditType="wysiwyg"
//         usageStatistics={false}
//       />
//       <Box className="reg_btn">
//         <Button variant="contained" color="primary">
//           Register
//         </Button>
//       </Box>
//     </Stack>
//   );
// };

// export default TuiEditor;
