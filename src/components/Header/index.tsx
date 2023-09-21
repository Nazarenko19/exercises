import { AppBar, Container, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const location = useLocation();

  const isHomePage = location.pathname === ROUTES.homePage;

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        {!isHomePage && (
          <Link to={ROUTES.homePage} style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="home"
              sx={{ mr: 2, color: "white" }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
        )}

        <Typography
          variant="body1"
          sx={{
            mr: 2,
            p: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {title}
        </Typography>
      </Container>
    </AppBar>
  );
};
