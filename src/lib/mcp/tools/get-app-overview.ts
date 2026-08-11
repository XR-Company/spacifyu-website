import { defineTool } from "@lovable.dev/mcp-js";
import { overview, missionBenefits } from "../content";

export default defineTool({
  name: "get_app_overview",
  title: "Get app overview",
  description:
    "Return the EndlessXR product overview: tagline, description, platform availability, core capabilities, mission, and links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = { ...overview, mission: missionBenefits };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
