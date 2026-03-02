import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ done, total, color = '#3B82F6'}) {
    const percentage = total === 0 ? 0 : Math.round((done / total) * 100);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {done}/{total} objectifs terminés ({percentage}%)
            </Text>
            <View style={styles.bar}>
                <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: color}]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  text: {
    color: '#E2E8F0',
    fontSize: 14,
    marginBottom: 6,
  },
  bar: {
    height: 8,
    width: '100%',
    backgroundColor: '#2D2D3F',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});