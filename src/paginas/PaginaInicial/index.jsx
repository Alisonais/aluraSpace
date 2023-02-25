
import Banner from "../../componentes/banner/Index";
import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/galeria";
import Rodape from "../../componentes/rodape";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <Banner />
                <Galeria />
            </main>
            <Rodape />
        </>
    )
};