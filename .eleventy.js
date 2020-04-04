module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "11ty.js"
  ]);

  eleventyConfig.addPassthroughCopy("CNAME");
};