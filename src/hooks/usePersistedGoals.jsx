import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createGoal } from "../utils/goalHelpers";

const STORAGE_KEY = '@lifeGoals';

export default function usePersistedGoals() {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if (jsonValue != null) {
                    setGoals(JSON.parse(jsonValue));
                }
            } catch (e) {
                console.log('Erreur chargement objectifs :', e)
            }
        })();
    }, []);

    useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
      } catch (e) {
        console.log('Erreur sauvegarde objectifs :', e);
      }
    })();
  }, [goals]);

  const addGoal = (title) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setGoals(prev => [...prev, createGoal(trimmed)]);
  };

  const updateStatus = (id, newStatus) => {
    setGoals(prev =>
      prev.map(g => (g.id === id ? { ...g, status: newStatus } : g))
    );
  };

  const updateTitle = (id, newTitle) => {
    setGoals(prev =>
      prev.map(g => (g.id === id ? { ...g, title: newTitle } : g))
    );
  };

  const deleteGoal = (id) => {
    setGoals(prev => prev.filter(g => g.id !== id));
  };

  return { goals, addGoal, updateStatus, updateTitle, deleteGoal };
}