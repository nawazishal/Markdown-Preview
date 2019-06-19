import React, { Component } from 'react'


export class Markdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             preview:''
        }
    }
    getPreview=(event)=>{
       this.setState({
           preview: event.target.value
       })
        
    }
    render() {
        const {preview}=this.state
        console.log(preview);
        return (
            <div>
           <h1>MarkdownOutput</h1>
            <input type="text"  onChange={this.getPreview}></input>
            <h1>MarkdownOutput</h1>
            <div>
           <p>{preview}</p>
           </div>
            </div>
        )
    }
}

export default Markdown
