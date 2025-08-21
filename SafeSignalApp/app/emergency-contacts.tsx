import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function EmergencyContactsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Emergency Contact Numbers</ThemedText>
      <ThemedText style={styles.paragraph}>
        Keep a printed list of emergency contacts including local authorities, utility companies, and medical services.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  paragraph: {
    fontSize: 14,
    marginTop: 12,
  },
});
