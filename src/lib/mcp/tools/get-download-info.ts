import { defineTool } from "@lovable.dev/mcp-js";
import { APP_STORE_URL, SITE_URL, overview } from "../content";

export default defineTool({
  name: "get_download_info",
  title: "Get download info",
  description:
    "Return where and how to get SpacifyU: supported platform and the App Store and website links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      platform: "Apple Vision Pro",
      availability: overview.availability,
      appStoreUrl: APP_STORE_URL,
      websiteUrl: SITE_URL,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
