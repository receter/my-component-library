import { style } from "@vanilla-extract/css";
import { myThemeVars } from "../../myTheme.css"

export const button = style({
    backgroundColor: myThemeVars.color.brand,
    color: myThemeVars.color.white,
    padding: myThemeVars.space.medium
});