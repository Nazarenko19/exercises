import { Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { exercisesStore } from "store";
import { ExerciseDescription } from "./ExerciseDescription";
import { Layout } from "components";

const List = () => {
  const { exercises } = exercisesStore;

  return (
    <Layout title="Знайдені вправи">
      {exercises.length ? (
        exercises.map((exerciseParams) => {
          const { name } = exerciseParams;
          return <ExerciseDescription key={name} {...exerciseParams} />;
        })
      ) : (
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Нажаль нічого не знайдено</Typography>
        </Paper>
      )}
    </Layout>
  );
};

export const ExercisesList = observer(List);
