import * as React from 'react'
import NextApp from 'next/app'
import '@the-innovation-circuit/theme/fonts/fonts.css'
import theme from '@the-innovation-circuit/theme'
import { ThemeProvider } from 'theme-ui'
import Script from 'next/script'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider
        theme={{
          ...theme,
          colors: { ...theme.colors, modes: {}, primary: '#ff686b', green: 'rgb(109, 254, 104)' }
        }}
      >
        <Script data-website-id="7f5983a6-54f9-47c6-a7d6-3df1e726616a" src="https://analytics.sampoder.com/umami.js" />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
