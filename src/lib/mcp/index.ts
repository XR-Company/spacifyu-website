import { defineMcp } from "@lovable.dev/mcp-js";
import getAppOverview from "./tools/get-app-overview";
import listFeatures from "./tools/list-features";
import listProblems from "./tools/list-problems";
import getDownloadInfo from "./tools/get-download-info";

export default defineMcp({
  name: "spacifyu",
  title: "SpacifyU",
  version: "0.1.0",
  instructions:
    "Public tools describing SpacifyU, a short-form XR platform for Apple Vision Pro. Use `get_app_overview` for the product summary and mission, `list_features` for product highlights, `list_xr_content_gap_problems` for the industry problems it addresses, and `get_download_info` for platform and download links. All data is public marketing content.",
  tools: [getAppOverview, listFeatures, listProblems, getDownloadInfo],
});
