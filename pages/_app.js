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
        <Script data-website-id="282db514-17c9-4875-a705-e758f74810fb" src="https://analytics.sampoder.com/umami.js" />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
