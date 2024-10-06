/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "project-panda-v2",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const worker = new sst.cloudflare.Worker("RemixWebApp", {
      handler: "./apps/web/server.ts",
      url: true,
    });
  
    return {
      api: worker.url,
    };
  },
});
