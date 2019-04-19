module.exports = {
  siteMetadata: {
    title: "Gatsby Learn",
    author: "George Favour",
    twitter: "https://www.twitter.com/tz_fayvor",
    github: "https://www.github.com/phavor",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-buildtime-timezone",
      options: {
        tz: "GMT",
        format: "ddd, DD MMM YYYY",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
