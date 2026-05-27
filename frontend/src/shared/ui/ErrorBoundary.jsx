import { Component } from 'react'

const defaultMessage = 'Something went wrong. Please refresh or try again later.'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (this.props.onError) {
      this.props.onError(error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-slate-950 text-white">
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
            <div className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-300">
              Application Error
            </div>
            <h1 className="text-3xl font-semibold">We hit a snag</h1>
            <p className="text-sm text-slate-300">
              {this.props.message || defaultMessage}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
