import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { ExerciseData, exercisesStore } from "store";
import { Layout } from "components";
import { GET_EXERCISES_API_URL, ROUTES } from "../../constants";
import { getMenuItems } from "./utils";
import {
  DIFFICULTY_OPTIONS,
  INITIAL_FORM_VALUES,
  MUSCLE_OPTIONS,
  TYPE_OPTIONS,
} from "./constants";
import { SearchFormValues } from "./types";

const Form = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmitForm = async (values: SearchFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<ExerciseData[]>(GET_EXERCISES_API_URL, {
        headers: {
          "X-Api-Key": apiKey,
        },
        params: values,
      });

      exercisesStore.setExercises(response.data);

      navigate(ROUTES.exercisesList);
    } catch (e) {
      const error = e as Error;

      setError(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { dirty, handleSubmit, getFieldProps } = useFormik<SearchFormValues>({
    initialValues: INITIAL_FORM_VALUES,
    onSubmit: handleSubmitForm,
  });

  return (
    <Layout title="Пошук вправ">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Назва"
          placeholder="Назва"
          {...getFieldProps("name")}
        />

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Тип</InputLabel>
          <Select label="Тип" {...getFieldProps("type")}>
            {getMenuItems(TYPE_OPTIONS)}
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>М'яз</InputLabel>
          <Select label="М'яз" {...getFieldProps("muscle")}>
            {getMenuItems(MUSCLE_OPTIONS)}
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Складність</InputLabel>
          <Select label="Складність" {...getFieldProps("difficulty")}>
            {getMenuItems(DIFFICULTY_OPTIONS)}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          disabled={!dirty || isLoading}
        >
          {isLoading ? <CircularProgress size={25} /> : "Пошук"}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </form>
    </Layout>
  );
};

export const SearchForm = observer(Form);
