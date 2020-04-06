module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "11ty.js"
  ]);

  eleventyConfig.addPassthroughCopy("site/CNAME");
  eleventyConfig.addPassthroughCopy("site/images");
};