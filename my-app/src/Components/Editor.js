import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ContentEditor extends Component {
  state  = {
    uploadedImages : [],
  }

  uploadImageCallBack = (file) => {
    let uploadedImages = this.state.uploadedImages;
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    }
    uploadedImages.push(imageObject);
    this.setState({uploadedImages: uploadedImages})

    return new Promise(
      (resolve, reject) => {
        resolve({ data: { link: imageObject.localSrc } });
        this.setState({uploadedImages: []});
      }
    );
  }

  constructor() {
    super()
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
  }
  
  render() {
    return (
      <Editor placeholder="Write your blog..."
        editorStyle={{ marginTop: -10,
                       marginLeft: 10,
                       height: '65vh' }}
        toolbarStyle={{backgroundColor: '#F1F1F1'}}
        toolbar={{
            options: ['inline', 'list', 'link', 'image', 'remove', 'history'],
            inline: {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
            },
            list: {
              inDropdown: false,
              options: ['unordered', 'ordered'],
            },
            image: {
              uploadEnabled: true,
              uploadCallback: this.uploadImageCallBack
            },
            link: {
              inDropdown: false,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link'],
            },  
            history: {
              inDropdown: false,
              options: ['undo', 'redo'],
            },
        }}
      />
    )  
  }
}


export default ContentEditor;
