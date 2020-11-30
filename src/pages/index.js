import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
// Import fontawesome css manually
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  )
}

export default Index
