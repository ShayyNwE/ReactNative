import React, { createContext, useContext, useState} from "react";
import { createGoal } from "../utils/goalHelpers";
import usePersistedGoals from "../hooks/usePersistedGoals";

const GoalsContext = createContext();

export function GoalsProvider({ children }) {
    const { goals, addGoal, updateStatus, updateTitle, deleteGoal} = usePersistedGoals();

    return (
        <GoalsContext.Provider
            value={{ goals, addGoal, updateStatus, updateTitle, deleteGoal}}
        >
            {children}
        </GoalsContext.Provider>
    );
}

export const useGoals = () => useContext(GoalsContext);