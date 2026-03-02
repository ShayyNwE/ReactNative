import React, { createContext, useContext, useState} from "react";
import { createGoal } from "../utils/goalHelpers";

const GoalsContext = createContext();

export function GoalsProvider({ children }) {
    const [goals, setGoals] = useState([]);

    const addGoal = (title) => {
        const trimmed = title.trim();
        if (!trimmed) return;
        setGoals(prev => [...prev, createGoal(trimmed)]);
    };

    const updateStatus = (id, newStatus) => {
        setGoals(prev =>
            prev.map(g => g.id === id ? { ...g, title: newTitle} : g)
        );
    };

    const updateTitle = (id, newTitle) => {
        setGoals(prev =>
        prev.map(g => g.id === id ? { ...g, title: newTitle } : g)
        );
    };

    const deleteGoal = (id) => {
        setGoals(prev => prev.filter(g => g.id !== id));
    };

    return (
        <GoalsContext.Provider
            value={{ goals, addGoal, updateStatus, updateTitle, deleteGoal}}
        >
            {children}
        </GoalsContext.Provider>
    );
}

export const useGoals = () => useContext(GoalsContext);