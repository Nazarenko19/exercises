import { action, makeObservable, observable } from "mobx";
import { ExerciseData } from "./types";

class ExercisesStore {
  exercises: ExerciseData[] = [];

  constructor() {
    makeObservable(this, {
      exercises: observable,
      setExercises: action,
    });
  }

  setExercises(exercisesData: ExerciseData[]) {
    this.exercises = exercisesData;
  }
}

export const exercisesStore = new ExercisesStore();
