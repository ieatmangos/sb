import React from "react";
import RichTextEditor from "react-rte";
import { v4 as uuid } from "uuid";
import "./Rte.css";

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ["INLINE_STYLE_BUTTONS"],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" }
  ]
};

class Rte extends React.PureComponent {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  hydrate() {
    setTimeout(() => {
      this.setState({
        value: RichTextEditor.createValueFromString(this.props.value, "html")
      });
    }, 1000);
  }
  componentDidMount() {
    this.hydrate();
  }

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const styleMap = {
      STRIKETHROUGH: {
        textDecoration: "line-through"
      }
    };
    return (
      <div className="border border-sb-gray">
        <RichTextEditor
          customStyleMap={styleMap}
          toolbarConfig={toolbarConfig}
          key={uuid()}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default Rte;
