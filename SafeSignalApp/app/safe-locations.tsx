import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SafeLocationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Safe Locations</ThemedText>
      <ThemedText style={styles.paragraph}>
        Identify sturdy shelters nearby and avoid flood-prone areas. This page will guide users to safe zones during windstorms.
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
