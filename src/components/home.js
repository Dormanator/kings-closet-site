import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"

const Home = ({ carouselConfig }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                maxWidth: 1200
                quality: 100
                cropFocus: NORTH
                fit: CONTAIN
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // Setup the object holding each image config with the correct img data for the carousel
  for (let slideConfig of carouselConfig) {
    data.allFile.edges.forEach(img => {
      const imgData = img.node.childImageSharp.fluid

      if (
        imgData.src.toLowerCase().includes(slideConfig.imgName.toLowerCase())
      ) {
        slideConfig.imgData = imgData
      }
    })
  }

  return (
    <div id="home">
      <Carousel>
        {Object.values(carouselConfig).map((imgConfig, i) => (
          <Carousel.Item key={`carousel-item-${i}`}>
            <Img
              fluid={imgConfig.imgData}
              className="carousel-img"
              alt={imgConfig.altText}
            />
            <Carousel.Caption
              className="d-inline-block bg-primary text-uppercase py-2 px-3"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "max-content",
                height: "max-content",
              }}
              dangerouslySetInnerHTML={{
                __html: imgConfig.caption,
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

Home.propTypes = {
  carouselConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgName: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Home.defaultProps = {
  carouselConfig: [
    {
      imgName: "slide1",
      caption: "We come together each week",
      altText: "Volunteers passing out clothes to the homeless",
    },
    {
      imgName: "slide2",
      caption: "Helping those in need",
      altText: "Line of homeless individuals waiting to receive donations",
    },
    {
      imgName: "slide2",
      caption: "Serving the lord and our community",
      altText: "Homeless sitting in front of a pastor delivering a sermon",
    },
  ],
}

export default Home
