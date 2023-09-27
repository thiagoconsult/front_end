import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

// Importação de pages EMPRESA
import { ListaEmpresa } from "./pages/Empresa/ListaEmpresa/ListaEmpresa";
import { ConsultaEmpresa } from "./pages/Empresa/ConsultaEmpresa/ConsultaEmpresa";
import { CadastroEmpresa } from "./pages/Empresa/CadastroEmpresa/CadastroEmpresa";
import { UpdateEmpresa } from "./pages/Empresa/UpdateEmpresa/UpdateEmpresa";
import { DeleteEmpresa } from "./pages/Empresa/DeleteEmpresa/DeleteEmpresa";

// Importação de pages PESSOA
import { ListaPessoa } from "./pages/Pessoa/ListaPessoa/ListaPessoa";
import { ConsultaPessoa } from "./pages/Pessoa/ConsultaPessoa/ConsultaPessoa";
import { CadastroPessoa } from "./pages/Pessoa/CadastroPessoa/CadastroPessoa";
import { UpdatePessoa } from "./pages/Pessoa/UpdatePessoa/UpdatePessoa";
import { DeletePessoa } from "./pages/Pessoa/DeletePessoa/DeletePessoa";

// Importação de pages OPORTUNIDADE
import { ListaOportunidade } from "./pages/Oportunidade/ListaOportunidade/ListaOportunidade";
import { ConsultaOportunidade } from "./pages/Oportunidade/ConsultaOportunidade/ConsultaOportunidade";
import { CadastroOportunidade } from "./pages/Oportunidade/CadastroOportunidade/CadastroOportunidade";
import { UpdateOportunidade } from "./pages/Oportunidade/UpdateOportunidade/UpdateOportunidade";
import { DeleteOportunidade } from "./pages/Oportunidade/DeleteOportunidade/DeleteOportunidade";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Rotas para Empresa */}
            <Route path="/listaempresa" element={<ListaEmpresa />} />
            <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
            <Route path="/consultaempresa/:id" element={<ConsultaEmpresa />} />
            <Route path="/updateempresa/:id" element={<UpdateEmpresa />} />
            <Route path="/deleteempresa/:id" element={<DeleteEmpresa />} />

            {/* Rotas para Pessoa */}
            <Route path="/listapessoa" element={<ListaPessoa />} />
            <Route path="/cadastropessoa" element={<CadastroPessoa />} />
            <Route path="/consultapessoa/:id" element={<ConsultaPessoa />} />
            <Route path="/updatepessoa/:id" element={<UpdatePessoa />} />
            <Route path="/deletepessoa/:id" element={<DeletePessoa />} />

            {/* Rotas para Oportunidade */}
            <Route path="/listaoportunidade" element={<ListaOportunidade />} />
            <Route
              path="/cadastrooportunidade"
              element={<CadastroOportunidade />}
            />
            <Route
              path="/consultaoportunidade/:id"
              element={<ConsultaOportunidade />}
            />
            <Route
              path="/updateoportunidade/:id"
              element={<UpdateOportunidade />}
            />
            <Route
              path="/deleteoportunidade/:id"
              element={<DeleteOportunidade />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
