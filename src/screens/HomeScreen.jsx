import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable,
  FlatList, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform,
} from 'react-native';
import GoalItem from '../components/GoalItem';
import { useGoals } from '../context/GoalsContext';

export default function HomeScreen() {
  const {goals, addGoal, updateStatus, updateTitle, deleteGoal} = useGoals()
  const [inputText, setInputText] = useState('')

  const handleAdd = () => {
    addGoal(inputText)
    setInputText('')
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.appTitle}>🎯 LifeGoals</Text>
          <Text style={styles.sub}>{goals.length} objectif{goals.length !== 1 ? 's' : ''}</Text>

          <View style={styles.addRow}>
            <TextInput
              style={styles.input}
              placeholder="Nouvel objectif..."
              placeholderTextColor="#64748B"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleAdd}
              returnKeyType="done"
            />
            <Pressable style={styles.addBtn} onPress={handleAdd}>
              <Text style={styles.addBtnText}>+</Text>
            </Pressable>
          </View>

          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem
                goal={item}
                onStatusChange={updateStatus}
                onUpdateTitle={updateTitle}
                onDelete={deleteGoal}
              />
            )}
            ListEmptyComponent={
              <Text style={styles.empty}>Aucun objectif pour l'instant 🌱</Text>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0F0F1A' },
  container: { flex: 1, padding: 20 },
  appTitle: { color: '#E2E8F0', fontSize: 28, fontWeight: '800', marginBottom: 2 },
  sub: { color: '#64748B', fontSize: 13, marginBottom: 20 },
  addRow: { flexDirection: 'row', marginBottom: 20, gap: 10 },
  input: {
    flex: 1,
    backgroundColor: '#1E1E2E',
    color: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },
  addBtn: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    width: 48, height: 48,
    alignItems: 'center', justifyContent: 'center',
  },
  addBtnText: { color: '#fff', fontSize: 24, fontWeight: '300' },
  empty: { color: '#475569', textAlign: 'center', marginTop: 60, fontSize: 15 },
});