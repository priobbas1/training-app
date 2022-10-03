import { createContext, useState } from "react";

export const WorkoutContext = createContext(null);

export const WorkoutContextProviderComponent = ({ children }) => {
  const [workoutId, setWorkoutId] = useState(null);

  const saveWorkoutId = (workoutId) => {
    setWorkoutId(workoutId);
  };
  return (
    <WorkoutContext.Provider value={{ workoutId, saveWorkoutId }}>
      {children}
    </WorkoutContext.Provider>
  );
};
