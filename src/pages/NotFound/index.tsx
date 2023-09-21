import { Typography, Paper, Container } from "@mui/material";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

export const NotFound = () => (
  <Container maxWidth="sm" sx={{ margin: "20px auto" }}>
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">404 - Сторінку не знайдено</Typography>

      <Typography variant="body1">
        Вибачте, але сторінку, яку ви шукали, не знайдено.
      </Typography>

      <SentimentVeryDissatisfied
        fontSize="large"
        style={{ verticalAlign: "middle", color: "red" }}
      />
    </Paper>
  </Container>
);
