import { defineTool } from "@lovable.dev/mcp-js";
import { features } from "../content";

export default defineTool({
  name: "list_features",
  title: "List product features",
  description:
    "List the EndlessXR product highlights, each with a title and description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(features, null, 2) }],
    structuredContent: { features },
  }),
});
