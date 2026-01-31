module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.ignores.add("PLAN.md");

  eleventyConfig.addTransform("figure-captions", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(/<img([^>]*alt="[^"]*"[^>]*)>/g, (imgTag) => {
        const altMatch = imgTag.match(/alt="([^"]*)"/);
        const alt = altMatch ? altMatch[1] : "";
        return "<figure>" + imgTag + "<figcaption>" + alt + "</figcaption></figure>";
      });
    }
    return content;
  });

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  eleventyConfig.addFilter("date", function (date, format) {
    const d = date instanceof Date ? date : new Date(date);
    if (format === "YYYY-MM-DD") return d.toISOString().split("T")[0];
    if (format === "MMMM d, yyyy") {
      return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }
    return d.toISOString();
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
