import React, { Component} from "react";
import ReactDOM from "react-dom";

class Iframe extends Component {
  componentDidMount() {
    this.node.addEventListener("load", this.handleLoad);
  }

  componentWillUnmout() {
    this.node.removeEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    this.iframeRoot = this.node.contentDocument.body;
    this.forceUpdate();
  };

  render() {
    const { children } = this.props;
    return (
      <iframe title='test' style={{width: '500px'}} srcDoc={`<!DOCTYPE html>`} ref={node => (this.node = node)}>
        {this.iframeRoot && ReactDOM.createPortal(children, this.iframeRoot)}
      </iframe>
    );
  }
}

export default Iframe;