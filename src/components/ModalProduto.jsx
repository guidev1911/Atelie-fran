import React, { useState } from "react";

export default function ModalProduto({ produto, onClose }) {
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

        <div className="flex flex-col md:flex-row">
          {/* Imagem e navegação */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={fotos[fotoIndex]}
              alt={`${produto.nome} foto ${fotoIndex + 1}`}
              className="object-cover w-full h-full rounded-l-lg"
            />
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

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/5579998779038?text=${encodeURIComponent(
                  `Olá fran, tenho interesse nesse item: ${produto.nome}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md text-center transition-colors w-full md:w-auto"
              >
                Compre agora
              </a>

              {/* Adicionar ao carrinho */}
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
