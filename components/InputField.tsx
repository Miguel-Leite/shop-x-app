import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput } from "react-native";

type Props = React.ComponentProps<typeof TextInput>;

export function InputField(props: Props) {
  return <TextInput style={styles.inputField} {...props} />;
}

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
    color: Colors.black,
  },
});
