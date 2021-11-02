import React from "react";
import ErrorMessage from "./ErrorMessage";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined, info: undefined };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage message={this.state.error.toString()} />;
    }
    return this.props.children;
  }
}
