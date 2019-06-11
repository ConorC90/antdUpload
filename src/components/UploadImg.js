import React, { Component } from "react";
import { Upload, message, Button, Icon } from "antd";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  listType: "picture",
  accept: "image/*"
};

class UploadImg extends Component {
  state = {};

  render() {
    return (
      <div>
        <Upload
          onChange={a => {
            console.log(a);
          }}
          {...props}
        >
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
        <Button type="primary">Submit</Button>
      </div>
    );
  }
}

export default UploadImg;
