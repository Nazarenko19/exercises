import { ReactNode } from "react";
import { Container } from "@mui/material";
import { Header } from "components/Header";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Header title={title} />

    <Container maxWidth="sm" sx={{ margin: "20px auto" }}>
      {children}
    </Container>
  </>
);
