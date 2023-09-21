import { Paper, Typography } from "@mui/material";
import { ExerciseData } from "store";

export const ExerciseDescription = ({
  name,
  type,
  muscle,
  equipment,
  difficulty,
  instructions,
}: ExerciseData) => {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
      <Typography variant="body1">
        <strong>Назва:</strong> {name || "-"}
      </Typography>
      <Typography variant="body1">
        <strong>Тип:</strong> {type || "-"}
      </Typography>
      <Typography variant="body1">
        <strong>М'яз:</strong> {muscle || "-"}
      </Typography>
      <Typography variant="body1">
        <strong>Складність:</strong> {difficulty || "-"}
      </Typography>
      <Typography variant="body1">
        <strong>Обладнання:</strong> {equipment || "-"}
      </Typography>
      <Typography variant="body1">
        <strong>Інструкції:</strong> {instructions || "-"}
      </Typography>
    </Paper>
  );
};
