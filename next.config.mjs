/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: { 
    remotePatterns: [
      { protocol: "https",
        hostname:"bbpcdn.pstatic.gr"
      },
      { protocol: "https",
        hostname:"www.wilsoncomm.com.hk"
      },
      { protocol: "https",
        hostname:"static01.galaxus.com"
      },
      { protocol: "https",
        hostname:"www.overseaselectronics.com"
      },
      { protocol: "https",
        hostname:"i05.appmifile.com"
      },
      { protocol: "https",
        hostname:"encrypted-tbn0.gstatic.com"
      },
    ]
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
