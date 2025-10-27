import { Text, TextProps } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

export function T(
  props: TextProps & {
    muted?: boolean;
    size?: number;
    weight?: "400" | "600" | "700";
  }
) {
  const { theme } = useTheme();
  const { style, muted, size = 16, weight = "400", ...rest } = props;
  return (
    <Text
      style={[
        {
          color: muted ? theme.colors.muted : theme.colors.text,
          fontSize: size,
          fontWeight: weight,
        },
        style,
      ]}
      {...rest}
    />
  );
}
