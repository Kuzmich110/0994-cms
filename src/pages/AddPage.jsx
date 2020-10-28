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
        this.cssEditor = createRef();
        this.jsEditor = createRef();
        this.handleSave = this.handleSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: "",
            title: ""
        }
    }

    handleSave(){
        let  formData= new FormData();
        formData.append('name',this.state.name);
        formData.append('title',this.state.title);
        formData.append('html',this.htmlEditor.current.editor.getValue())
        formData.append('css',this.cssEditor.current.editor.getValue());
        formData.append('js',this.jsEditor.current.editor.getValue());
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

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    render() {
        return <div>
            <h2 className="my-2 text-center">Добавление страницы сайта</h2>
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-html-tab" data-toggle="tab" href="#nav-html" role="tab"
                   aria-controls="nav-html" aria-selected="true">HTML</a>
                <a className="nav-item nav-link" id="nav-css-tab" data-toggle="tab" href="#nav-css" role="tab"
                   aria-controls="nav-profile" aria-selected="false">CSS</a>
                <a className="nav-item nav-link" id="nav-js-tab" data-toggle="tab" href="#nav-js" role="tab"
                   aria-controls="nav-js" aria-selected="false">JS</a>
                <a className="nav-item nav-link" id="nav-extraHTML-tab" data-toggle="tab" href="#nav-extraHTML" role="tab"
                   aria-controls="nav-extraHTML" aria-selected="false">Параметры</a>
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
                    ref={this.cssEditor}
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
                    ref={this.jsEditor}
                    setOptions={{
                        fontSize:18,
                        enableEmmet:true
                    }}
                />
            </div>
            <div className="tab-pane fade" id="nav-extraHTML" role="tabpanel" aria-labelledby="nav-rxtraHTML-tab">
                <div className="col-10 mx-auto my-3">
                    <div className="mb-3">
                        <input name = "name" onChange={this.handleInputChange} type="text" className="form-control" placeholder="URL страницы"/>
                    </div>
                    <div className="mb-3">
                        <input name = "title" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Заголоваок страницы"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}