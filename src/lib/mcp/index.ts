import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";
import listPagesTool from "./tools/list_pages";
import getContactInfoTool from "./tools/get_contact_info";

export default defineMcp({
  name: "shivaami-mcp",
  title: "Shivaami MCP",
  version: "0.1.0",
  instructions:
    "Tools for Shivaami — a Google Cloud & Google Workspace partner. Use `list_pages` to discover Shivaami's public pages, `get_contact_info` for Shivaami's phone/email/offices, and `echo` to verify connectivity.",
  tools: [echoTool, listPagesTool, getContactInfoTool],
});