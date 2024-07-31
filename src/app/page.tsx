import { Container, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <main className="bg-red-600 h-auto flex flex-col">
        <div className="bg-blue-600 w-major-third h-minor-seventh"></div>
        <div className="bg-yellow-600 h-minor-third w-perfect-fifth self-end"></div>
        <div className="bg-orange-600 h-minor-seventh w-major-second"></div>
        <div className="bg-green-600 h-minor-second w-tritone self-center"></div>
        <div className="bg-sky-600 w-minor-sixth h-minor-sixth"></div>
      </main>
    </Container>
  );
}
