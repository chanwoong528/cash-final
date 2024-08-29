/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
    // prependData: `@use "styles/styles.scss";`,
    prependData: `
    @use "styles/_common/_variable.scss";
    @use "styles/_common/_reset.scss";
    
    @import "styles/styles.scss";
     `,
  },
};

export default nextConfig;
