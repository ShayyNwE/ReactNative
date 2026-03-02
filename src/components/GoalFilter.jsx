import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function GoalFilter({ options = [], selected, onChange }) {
    return (
        <View style={styles.filters}>
            {options.map((f) => (
                <Pressable
                    key={f}
                    style={[styles.filterBtn, selected === f && styles.filterBtnActivate]}
                    onPress={() => onChange(f)}
                >
                    <Text
                        style={[styles.filterText, selected === f && styles.filterTextActivate]}
                    >
                        {f}
                    </Text>
                </Pressable>   
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
  filters: { flexDirection: 'row', marginBottom: 10, gap: 10 },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#1E1E2E',
  },
  filterBtnActive: { backgroundColor: '#3B82F6' },
  filterText: { color: '#E2E8F0', fontSize: 14 },
  filterTextActive: { color: '#fff', fontWeight: '600' },
});