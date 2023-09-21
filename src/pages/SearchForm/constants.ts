import { Option, SearchFormValues } from "./types";

export const TYPE_OPTIONS: Option[] = [
  { name: "Кардіо", value: "cardio" },
  { name: "Олімпійська важка атлетика", value: "olympic_weightlifting" },
  { name: "Пліометрика", value: "plyometrics" },
  { name: "Силова важка атлетика", value: "powerlifting" },
  { name: "Сила", value: "strength" },
  { name: "Розтяжка", value: "stretching" },
  { name: "Стронгмен (сильні люди)", value: "strongman" },
];

export const MUSCLE_OPTIONS: Option[] = [
  { name: "Прес", value: "abdominals" },
  { name: "Зовнішні зігзагоподібні м'язи", value: "abductors" },
  { name: "Внутрішні зігзагоподібні м'язи", value: "adductors" },
  { name: "Біцепс", value: "biceps" },
  { name: "Щиколотки", value: "calves" },
  { name: "Груди", value: "chest" },
  { name: "Підруччя", value: "forearms" },
  { name: "Ягодиці", value: "glutes" },
  { name: "Стегна (підколінні)", value: "hamstrings" },
  { name: "Задні дельти", value: "lats" },
  { name: "Нижня спина", value: "lower_back" },
  { name: "Середня спина", value: "middle_back" },
  { name: "Шия", value: "neck" },
  { name: "Квадрицепси", value: "quadriceps" },
  { name: "Трапеції", value: "traps" },
  { name: "Трицепс", value: "triceps" },
];

export const DIFFICULTY_OPTIONS: Option[] = [
  { name: "Початківець", value: "beginner" },
  { name: "Середній рівень", value: "intermediate" },
  { name: "Експерт", value: "expert" },
];

export const INITIAL_FORM_VALUES: SearchFormValues = {
  name: "",
  type: "",
  muscle: "",
  difficulty: "",
};
