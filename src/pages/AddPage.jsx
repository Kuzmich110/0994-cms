import React, {createRef} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/ext-emmet";
import "emmet-core"

export class AddPage extends React.Component {
    constructor() {
        super();
        this.htmlEditor = createRef();
        this.handleSave = this.handleSave.bind(this);

    }

    handleSave(){
        let  formData= new FormData();
        formData.append('html',this.htmlEditor.current.editor.getValue())

        fetch("http://1.kuzya19l.beget.tech/addPage",{
            method: 'POST',
            body: formData
        })
            .then(response=>response.json())
            .then(result=>console.log(result))
    }

    componentDidMount() {
        console.log("Вызвана функция componentDidMount")
    }

    render() {
        return <div>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-html-tab" data-toggle="tab" href="#nav-html" role="tab"
                   aria-controls="nav-html" aria-selected="true">HTML</a>
                <a className="nav-item nav-link" id="nav-css-tab" data-toggle="tab" href="#nav-css" role="tab"
                   aria-controls="nav-profile" aria-selected="false">CSS</a>
                <a className="nav-item nav-link" id="nav-js-tab" data-toggle="tab" href="#nav-js" role="tab"
                   aria-controls="nav-js" aria-selected="false">JS</a>
                <button onClick={this.handleSave} className="btn btn-link ml-auto">[Сохранить]</button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-html" role="tabpanel"
                 aria-labelledby="nav-html-tab">
                <AceEditor
                    mode="html"
                    width="100%"
                    theme="vibrant_ink"
                    ref={this.htmlEditor}
                    setOptions={{
                        fontSize:18,
                        enableEmmet:true
                    }}
                />
            </div>
            <div className="tab-pane fade" id="nav-css" role="tabpanel" aria-labelledby="nav-css-tab">
                <AceEditor
                    mode="css"
                    width="100%"
                    theme="vibrant_ink"
                    setOptions={{
                        fontSize:18,
                        enableEmmet:true
                    }}
                />
            </div>
            <div className="tab-pane fade" id="nav-js" role="tabpanel" aria-labelledby="nav-js-tab">
                <AceEditor
                    mode="javascript"
                    width="100%"
                    theme="vibrant_ink"
                    setOptions={{
                        fontSize:18,
                        enableEmmet:true
                    }}
                />
            </div>
        </div>
        </div>
    }
}