import { Container, Box } from "@mui/material";
import AppBar from "@/app/components/molecules/AppBar";
import Footer from "@/app/components/molecules/Footer";

export default function Home() {
  return (
    <>
      <AppBar>
        <div></div>
      </AppBar>
      <main>
        <Container maxWidth="lg">
          <div className="bg-red-600 h-auto flex flex-col my-14">
            <div className="bg-blue-600 w-major-third h-minor-seventh"></div>
            <div className="bg-yellow-600 h-minor-third w-perfect-fifth self-end"></div>
            <div className="bg-orange-600 h-minor-seventh w-major-second"></div>
            <div className="bg-green-600 h-minor-second w-tritone self-center"></div>
            <div className="bg-sky-600 w-minor-sixth h-minor-sixth"></div>
          </div>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
}
