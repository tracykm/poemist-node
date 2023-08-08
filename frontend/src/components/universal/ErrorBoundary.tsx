import { PureComponent } from "react"

export class ErrorBoundary extends PureComponent<{}, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.warn(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <p style={{ textAlign: "center", margin: 50 }}>Something went wrong.</p>
      )
    }

    return this.props.children
  }
}
