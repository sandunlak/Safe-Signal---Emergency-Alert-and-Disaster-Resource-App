
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';
import { router, useRouter } from 'expo-router';

export default function WindstormScreen() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(kitItems.length).fill(false));

  const toggleItem = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image
        source={require('../../assets/images/image1.png')}
        style={styles.headerImage}
      />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Windstorm Awareness</ThemedText>
        <ThemedText style={styles.subtitle}>
          Understanding, preparing, and responding safely
        </ThemedText>

        {/* What is a Windstorm */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>What is a Windstorm?</ThemedText>
          <ThemedText style={styles.paragraph}>
            A windstorm is a weather event characterized by high-speed winds, often accompanied by rain or snow. These storms can cause significant damage to property and pose serious safety risks. Windstorms can occur anywhere but are most common in coastal regions and open plains.
          </ThemedText>
          <Image
            source={require('../../assets/images/image7_sri.jpeg')}
            style={styles.image}
          />
        </View>

        {/* Common Hazards */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Common Hazards</ThemedText>
          <View style={styles.warningBox}>
            <ThemedText style={styles.warningText}>
              ⚠️ Windstorms can create multiple dangerous conditions. Be aware of these common hazards.
            </ThemedText>
          </View>
          <View style={styles.hazardRow}>
            <View style={styles.hazardCard}>
              <Image source={require('../../assets/images/fallpower.webp')} style={styles.cardImage} />
              <ThemedText style={styles.cardTitle}>Fallen power lines</ThemedText>
              <ThemedText style={styles.cardSubtitle}>Power Outages</ThemedText>
            </View>
            <View style={styles.hazardCard}>
              <Image source={require('../../assets/images/fall_tree.jpg')} style={styles.cardImage} />
              <ThemedText style={styles.cardTitle}>Fallen tree</ThemedText>
              <ThemedText style={styles.cardSubtitle}>Falling Trees</ThemedText>
            </View>
          </View>
          {hazards.map((item, index) => (
            <ThemedText key={index} style={styles.bullet}>• {item}</ThemedText>
          ))}
        </View>

        {/* Safety Tips */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Safety Tips</ThemedText>
          <Image source={require('../../assets/images/image5.webp')} style={styles.image} />
          {safetyTips.map((tip, index) => (
            <View key={index} style={styles.tipRow}>
              <View style={styles.iconCircle}>
                <ThemedText style={{ color: '#fff', fontSize: 18 }}>{icons[index]}</ThemedText>
              </View>
              <ThemedText style={styles.tipText}>{tip}</ThemedText>
            </View>
          ))}
        </View>

        {/* External Link */}
        <ExternalLink href="https://weather.gov/safety">
          <ThemedText type="link" style={styles.link}>Learn More at weather.gov</ThemedText>
        </ExternalLink>

        {/* Emergency Kit Checklist */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Emergency Kit Checklist</ThemedText>
          <ThemedText style={styles.paragraph}>
            Having an emergency kit ready can be lifesaving during severe windstorms. Check off items as you gather them.
          </ThemedText>
          <Image source={require('../../assets/images/image6.jpeg')} style={styles.image} />
          {kitItems.map((item, index) => (
            <Pressable key={index} onPress={() => toggleItem(index)} style={styles.checkboxRow}>
              <View style={[styles.checkbox, checkedItems[index] && styles.checkboxChecked]}>
                {checkedItems[index] && <ThemedText style={styles.checkmark}>✓</ThemedText>}
              </View>
              <ThemedText style={styles.checkboxLabel}>{item}</ThemedText>
            </Pressable>
          ))}
        </View>

        {/* Safe Locations & Emergency Contacts */}
  <View style={styles.section}>
    <Pressable
      onPress={() => router.push('/safe-locations')}
      style={[styles.button, { backgroundColor: '#28a745' }]}
    >
      <ThemedText style={styles.buttonText}>📍 Safe Locations</ThemedText>
    </Pressable>

    <Pressable
      onPress={() => router.push('/emergency-contacts')}
      style={[styles.button, { backgroundColor: '#dc3545' }]}
    >
      <ThemedText style={styles.buttonText}>📞 Emergency Contact Numbers</ThemedText>
    </Pressable>
  </View>

        {/* Did You Know Section */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Did You Know?</ThemedText>
          <Image source={require('../../assets/images/baticolo.jpeg')} style={styles.image} />
          <ThemedText style={styles.paragraph}>
            The strongest windstorm ever recorded was during Typhoon Tip in 1979, with sustained winds of 190 mph (305 km/h). Windstorms cause billions of dollars in damage worldwide each year.
          </ThemedText>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const hazards = [
  'Flying debris that can cause injuries or property damage',
  'Power outages due to downed power lines',
  'Falling trees and branches',
  'Structural damage to buildings',
  'Dangerous driving conditions',
  'Potential flooding in coastal areas',
];

const safetyTips = [
  'Stay Indoors: Remain inside during the storm and away from windows.',
  'Secure Outdoor Items: Bring in or tie down furniture, toys, and other loose objects.',
  'Prepare Emergency Kit: Have supplies ready in case of extended power outages.',
  'Charge Devices: Ensure phones and emergency devices are fully charged.',
];

const kitItems = [
  'Water (1 gallon per person per day)',
  'Non-perishable food',
  'Flashlight with extra batteries',
  'First aid kit',
  'Battery-powered or hand-crank radio',
  'Whistle to signal for help',
  'Dust mask and plastic sheeting',
  'Moist towelettes and garbage bags',
  'Wrench or pliers for utilities',
  'Manual can opener',
];

const icons = ['🏠', '🪑', '🧰', '🔋'];

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000000',
  },
  paragraph: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  warningBox: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  warningText: {
    color: '#d9534f',
    fontSize: 14,
  },
  hazardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  hazardCard: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderRadius: 6,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666666',
  },
  bullet: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  link: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    color: '#4da6ff',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#0d6efd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333333',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
  