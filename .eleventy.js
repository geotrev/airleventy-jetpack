module.exports = function (eleventyConfig) {
  // assets
  eleventyConfig.addWatchTarget("./assets/sass")
  eleventyConfig.addWatchTarget("./assets/js")
  eleventyConfig.addPassthroughCopy("./assets/dist")

  eleventyConfig.addWatchTarget("./assets/img")
  eleventyConfig.addPassthroughCopy("./assets/img")

  // asset shortcodes
  eleventyConfig.addShortcode("js", function (path) {
    return `<script src='/assets/dist/js/${path}'></script>`
  })

  eleventyConfig.addShortcode("css", function (path) {
    return `<link src='/assets/dist/css/${path}' rel="stylesheet" type="text/css" />`
  })

  return {
    passthroughFileCopy: true,
  }
}
