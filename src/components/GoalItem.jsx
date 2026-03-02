import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable,
  Alert, StyleSheet,
} from 'react-native';
import { STATUS_COLORS, NEXT_STATUS } from '../utils/goalHelpers';

export default function GoalItem({ goal, onStatusChange, onUpdateTitle, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(goal.title);

  const handleDelete = () => {
    Alert.alert(
      'Supprimer',
      `Supprimer "${goal.title}" ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Supprimer', style: 'destructive', onPress: () => onDelete(goal.id) },
      ]
    );
  };

  const handleSaveEdit = () => {
    const trimmed = editText.trim();
    if (trimmed) onUpdateTitle(goal.id, trimmed);
    setEditing(false);
  };

  const color = STATUS_COLORS[goal.status];

  return (
    <View style={styles.card}>
      <View style={[styles.statusBar, { backgroundColor: color }]} />

      <View style={styles.body}>
        {editing ? (
          <TextInput
            style={styles.editInput}
            value={editText}
            onChangeText={setEditText}
            onBlur={handleSaveEdit}
            onSubmitEditing={handleSaveEdit}
            autoFocus
          />
        ) : (
          <Pressable onLongPress={() => setEditing(true)}>
            <Text style={styles.title}>{goal.title}</Text>
            <Text style={[styles.status, { color }]}>{goal.status}</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.actions}>
        <Pressable
          style={[styles.btn, { borderColor: color }]}
          onPress={() => onStatusChange(goal.id, NEXT_STATUS[goal.status])}
        >
          <Text style={[styles.btnText, { color }]}>→</Text>
        </Pressable>

        <Pressable style={styles.deleteBtn} onPress={handleDelete}>
          <Text style={styles.deleteBtnText}>✕</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E2E',
    borderRadius: 12,
    marginBottom: 10,
    overflow: 'hidden',
  },
  statusBar: { width: 5 },
  body: { flex: 1, padding: 14 },
  title: { color: '#E2E8F0', fontSize: 16, fontWeight: '500' },
  status: { fontSize: 12, marginTop: 4 },
  editInput: {
    color: '#E2E8F0', fontSize: 16,
    borderBottomWidth: 1, borderBottomColor: '#3B82F6',
    paddingVertical: 2,
  },
  actions: { flexDirection: 'row', alignItems: 'center', paddingRight: 10, gap: 8 },
  btn: {
    borderWidth: 1, borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 6,
  },
  btnText: { fontSize: 16, fontWeight: 'bold' },
  deleteBtn: {
    backgroundColor: '#2D2D3F', borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 6,
  },
  deleteBtnText: { color: '#EF4444', fontSize: 14 },
});