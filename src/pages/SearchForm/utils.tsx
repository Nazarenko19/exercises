import { MenuItem } from "@mui/material";
import { Option } from "./types";

export const getMenuItems = (options: Option[]) =>
  options.map(({ name, value }) => (
    <MenuItem key={value} value={value}>
      {name}
    </MenuItem>
  ));
