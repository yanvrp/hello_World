import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu"
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/scrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="Post/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes> 
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
