import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";

function ImageUpload() {
  const [file, setFile] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    file.forEach((f, i) => {
      formData.append(i, f);
    });
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // await axios
    //   .post("/upload", formData, config)
    //   .then((response) => {
    //     alert("The file is successfully uploaded");
    //   })
    //   .catch((error) => {});
  };

  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="button">
          <label htmlFor="multi">
            <FontAwesomeIcon icon={faPlus} color="#3B5998" className="faplus" />
            <p>Select Image</p>
          </label>

          <input
            type="file"
            id="multi"
            multiple
            onChange={(e) => setFile(e.target.files)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ImageUpload;
