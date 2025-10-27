import { View, TextInput, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import { T } from "../components/T";
import { useAuth } from "../state/auth";
import { useTheme } from "../theme/ThemeProvider";

export default function Login() {
  const { login } = useAuth();
  const { theme, mode, setMode } = useTheme();

  return (
    <Screen style={{ padding: 20 }}>
      {/* Theme toggle at top */}
      <TouchableOpacity
        onPress={() => setMode(mode === "dark" ? "light" : "dark")}
        style={{
          alignSelf: "flex-end",
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        }}
      >
        <T>{mode === "dark" ? "☀️ Light" : "🌙 Dark"}</T>
      </TouchableOpacity>

      <T size={28} weight="700" style={{ marginTop: 24 }}>
        Welcome to DropCart
      </T>
      <T muted style={{ marginBottom: 24 }}>
        Same-store pricing. Daily 3pm batching.
      </T>

      <View style={{ gap: 12 }}>
        <TextInput
          placeholder="Email or phone"
          placeholderTextColor={theme.colors.muted}
          style={{
            borderWidth: 1,
            borderColor: theme.colors.border,
            borderRadius: 10,
            padding: 14,
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
          }}
        />
        {/* We’ll wire OTP later; for now, tap Continue to “log in” */}
        <TouchableOpacity
          onPress={login}
          style={{
            backgroundColor: theme.colors.primary,
            padding: 14,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <T style={{ color: "#fff", fontWeight: "700" }}>Continue</T>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
