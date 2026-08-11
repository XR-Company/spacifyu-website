import { defineTool } from "@lovable.dev/mcp-js";
import { problems } from "../content";

export default defineTool({
  name: "list_xr_content_gap_problems",
  title: "List XR content gap problems",
  description:
    "List the industry problems EndlessXR addresses: the XR content gap, production costs, and user friction.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(problems, null, 2) }],
    structuredContent: { problems },
  }),
});
