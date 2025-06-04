import React, { useState } from "react";
import bannerCroche from '../images/crochePrincipal.jpg'; 

const dados = {
  Moda: [
    {
      id: 1,
      nome: "Aventador SVJ",
      descricao: "Blusa artesanal, fresca e estilosa para o verão.",
      imagens: [
        "https://assets.dyler.com/uploads/cars/397170/8645000/medium_19fc8130-c559-41ef-9411-8efde7c5000a.jpg",
        "https://www.europeanprestige.co.uk/blobs/stock/285/images/2ab44efc-55c1-4fab-be41-439d18568918/hi4a2922.jpg?width=2000&height=1333",
      ],
      valor: "R$ 150,00",
      material: "Fio de algodão 100%",
      horasTrabalho: 12,
    },
    {
      id: 2,
      nome: "Pagani Utopia",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://s2-autoesporte.glbimg.com/6Xr7j1SBM41MkIhurs2svXjjZWM=/0x0:1920x1080/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/A/G/GKF2dWRHmXDT2anmv4aA/pagani-utopia-13.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pagani_Utopia.jpg/1200px-Pagani_Utopia.jpg",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 3,
      nome: "La Ferrari",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://preview.redd.it/me-mandem-suas-figurinhas-estilo-shitpost-v0-tzyllpa4rgcc1.png?width=640&crop=smart&auto=webp&s=fce4a1e45a1cf8016587e5b3d7b77b7c45ce93fc",
        "https://i.ytimg.com/vi/IgiwZuloa00/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGE8gZShXMA8=&rs=AOn4CLBOuY6cpuJXKgr4rPVohVZ6ALbnPw",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 4,
      nome: "bugatti chiron ss",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://s2-autoesporte.glbimg.com/hCX5snCPHsNKCEdyVRnFCyAuEL0=/0x0:1758x1059/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/H/d/LnLfRDQU60D7KzA0kLxw/bugatti-chiron-ss-300-is-officially-dead-final-copy-gets-delivered-to-its-owner-194086-1.jpg",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 5,
      nome: "Camisa do flamengo",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://nacaixafc.com.br/wp-content/uploads/2022/10/camisa-flamengo-patrocinios.png",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 6,
      nome: "Não entendi, repete",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img647b876865e8e0.68667366.jpg?lastEdited=1685817218&w=600&h=600&f=webp",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 7,
      nome: "aan",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://pbs.twimg.com/profile_images/1897013201855823873/b5nmfD1C_400x400.jpg",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 8,
      nome: "Sabado",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TAvJgtD1Pmr8KCfNQfF8wovIgbILSpVkWw&s",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
        {
      id: 9,
      nome: "Chique",
      descricao: "Vestido feito à mão com fio de algodão e flores delicadas.",
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrIv_vXpcs_wYGun98nKdJ6noheXHEHtfVg&s",
      ],
      valor: "R$ 250,00",
      material: "Algodão orgânico e linha colorida",
      horasTrabalho: 20,
    },
  ],
  Vestuário: [
    {
      id: 10,
      nome: "pão",
      descricao: "Colar leve e elegante feito com fio colorido.",
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yIS_Zqfiv1e1wRvhznUOlKWtb6_mLLgK8A&s",
      ],
      valor: "R$ 80,00",
      material: "Linha acrílica",
      horasTrabalho: 6,
    },
    {
      id: 11,
      nome: "Gato Col",
      descricao: "Brincos feitos com linha e pequenos detalhes em miçangas.",
      imagens: [
        "https://images3.memedroid.com/images/UPLOADED35/5e1a5a7715799.jpeg",
      ],
      valor: "R$ 65,00",
      material: "Linha e miçangas",
      horasTrabalho: 4,
    },
  ],
  Acessórios: [
    {
      id: 12,
      nome: "armamento",
      descricao: "Bolsa espaçosa, perfeita para o dia a dia.",
      imagens: [
        "https://s2.glbimg.com/SpNvyMcwEPWB8cptILp5qrkjZjU=/620x400/e.glbimg.com/og/ed/f/original/2013/12/23/mikhail_kalashnikov.jpg",
      ],
      valor: "R$ 180,00",
      material: "Fio de algodão grosso",
      horasTrabalho: 15,
    },
    {
      id: 13,
      nome: "serio",
      descricao: "Mochila feita com fios resistentes, ideal para viagens.",
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lxvi1YN37veUPZVDCZatLTlgmWi0UByI2A&s",
      ],
      valor: "R$ 300,00",
      material: "Linha resistente e forro impermeável",
      horasTrabalho: 25,
    },
        {
      id: 14,
      nome: "cachorro melancia",
      descricao: "Mochila feita com fios resistentes, ideal para viagens.",
      imagens: [
        "https://pbs.twimg.com/profile_images/1173806309378011136/awythdsn_400x400.jpg",
      ],
      valor: "R$ 300,00",
      material: "Linha resistente e forro impermeável",
      horasTrabalho: 25,
    },
        {
      id: 15,
      nome: "u zovo",
      descricao: "Mochila feita com fios resistentes, ideal para viagens.",
      imagens: [
        "https://acdn-us.mitiendanube.com/stores/002/296/660/products/ovo1-6b57de61281a3d3cf016841052104265-1024-1024.jpg",
      ],
      valor: "R$ 300,00",
      material: "Linha resistente e forro impermeável",
      horasTrabalho: 25,
    },
        {
      id: 16,
      nome: "ta ok",
      descricao: "Mochila feita com fios resistentes, ideal para viagens.",
      imagens: [
        "https://assets.brasildefato.com.br/2025/02/JAIR-BOLSONARO-FABIO-POZZEBON.jpg",
      ],
      valor: "R$ 300,00",
      material: "Linha resistente e forro impermeável",
      horasTrabalho: 25,
    },
        {
      id: 17,
      nome: "oi",
      descricao: "Mochila feita com fios resistentes, ideal para viagens.",
      imagens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xI1LqxCGglcQZVVo_XEg-9r1zZ4tZfDE3A&s",
      ],
      valor: "R$ 300,00",
      material: "Linha resistente e forro impermeável",
      horasTrabalho: 25,
    },
  ],
};

function Modal({ produto, onClose }) {
  const [fotoIndex, setFotoIndex] = useState(0);

  if (!produto) return null;

  const fotos = produto.imagens;

  function prevFoto() {
    setFotoIndex((i) => (i === 0 ? fotos.length - 1 : i - 1));
  }

  function nextFoto() {
    setFotoIndex((i) => (i === fotos.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-auto shadow-lg relative">
        {/* Botão fechar */}
        <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 text-3xl font-bold bg-black/40 w-8 h-8 rounded-full flex items-center justify-center"
        aria-label="Fechar modal"
        >
        &times;
        </button>

        {/* Conteúdo modal */}
        <div className="flex flex-col md:flex-row">
        {/* Imagem e navegação */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <img
            src={fotos[fotoIndex]}
            alt={`${produto.nome} foto ${fotoIndex + 1}`}
            className="object-cover w-full h-full rounded-l-lg"
            />
            {/* Botões de navegação */}
            {fotos.length > 1 && (
            <>
                <button
                onClick={prevFoto}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-1 rounded-full hover:bg-opacity-60"
                aria-label="Foto anterior"
                >
                ‹
                </button>
                <button
                onClick={nextFoto}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-1 rounded-full hover:bg-opacity-60"
                aria-label="Próxima foto"
                >
                ›
                </button>
            </>
            )}
        </div>

        {/* Info do produto */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
            <div>
            <h2 className="text-2xl font-bold mb-2">{produto.nome}</h2>
            <p className="text-gray-700 mb-4">{produto.descricao}</p>

            <p>
                <span className="font-semibold">Valor: </span>
                {produto.valor}
            </p>
            <p>
                <span className="font-semibold">Material utilizado: </span>
                {produto.material}
            </p>
            <p>
                <span className="font-semibold">Horas de trabalho: </span>
                {produto.horasTrabalho} horas
            </p>
            </div>

            {/* Botões de ação */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
            {/* Botão WhatsApp */}
            <a
                href={`https://wa.me/5579998974515?text=${encodeURIComponent(
                `Olá fran, tenho interesse nesse item: ${produto.nome}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md text-center transition-colors w-full md:w-auto"
            >
                Compre agora
            </a>

            {/* Botão Adicionar ao carrinho */}
            <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md transition-colors w-full md:w-auto"
                onClick={() => {
                // futura função para adicionar ao carrinho
                }}
            >
                Adicionar ao carrinho 🛒
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default function Portfolio() {
  const [categoria, setCategoria] = useState("Moda");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fundo foto topo */}
      <div
        className="h-[45vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            `url(${bannerCroche})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Ateliê da Fran</h1>
        <p className="mt-2 text-lg md:text-xl drop-shadow-md text-center">
        tudo o que você possa imaginar, feito de crochê!
        </p>
        </div>
      </div>

      {/* Menu categorias */}
      <nav className="bg-white shadow-md">
        <ul className="flex justify-center space-x-12 py-4 text-lg font-medium text-gray-700">
          {["Moda", "Vestuário", "Acessórios"].map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer hover:text-pink-600 transition-colors ${
                categoria === cat ? "text-pink-600 border-b-2 border-pink-600" : ""
              }`}
              onClick={() => setCategoria(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Conteúdo categoria */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dados[categoria].map(({ id, nome, descricao, imagens }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setProdutoSelecionado(dados[categoria].find((p) => p.id === id))}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setProdutoSelecionado(dados[categoria].find((p) => p.id === id));
              }}
            >
              <img src={imagens[0]} alt={nome} className="rounded-t-lg object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{nome}</h3>
                <p className="mt-2 text-gray-600 text-sm">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-600 text-pink-600 p-4 text-center">
        © {new Date().getFullYear()} Siga nossa página no instagram.
      </footer>

      {/* Modal */}
      {produtoSelecionado && (
        <Modal produto={produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />
      )}
    </div>
  );
}
