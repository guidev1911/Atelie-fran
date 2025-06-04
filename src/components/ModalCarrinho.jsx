import React, { useState } from "react";

export default function ModalCarrinho({ carrinho = [], onClose, onAtualizarCarrinho }) {
  const [selecionados, setSelecionados] = useState([]);

  function toggleSelecionado(id) {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  function excluirSelecionados() {
    if (selecionados.length === 0) {
      alert("Selecione ao menos um item para excluir.");
      return;
    }
    const novoCarrinho = carrinho.filter((item) => !selecionados.includes(item.id));
    onAtualizarCarrinho(novoCarrinho);
    setSelecionados([]);
  }

  const totalCarrinho = carrinho.reduce((total, item) => {
    const valorNumero = parseFloat(
    item.valor.toString().replace(/\./g, '').replace(',', '.').replace(/[^0-9.]+/g, '')
    ) || 0;
    const quantidade = item.quantidade || 1;
    return total + valorNumero * quantidade;
  }, 0);

  const totalFormatado = totalCarrinho.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const gerarMensagemWhatsApp = () => {
    const itensTexto = carrinho
      .map((item, index) => `${index + 1}. ${item.nome} - ${item.valor} (Qtd: ${item.quantidade || 1})`)
      .join("\n");

    const texto = `Olá Fran, gostaria de solicitar um orçamento com os seguintes itens:\n${itensTexto}\nTotal: ${totalFormatado}`;
    return `https://wa.me/5579998779038?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50 p-4 pt-24"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-carrinho"
    >
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[80vh] overflow-auto shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 text-3xl font-bold bg-black/40 w-8 h-8 rounded-full flex items-center justify-center"
          aria-label="Fechar carrinho"
          type="button"
        >
          &times;
        </button>

        <div className="p-6">
          <h2 id="titulo-carrinho" className="text-2xl font-bold mb-4">
            🛒 Itens no Carrinho
          </h2>

          {carrinho.length === 0 ? (
            <p className="text-gray-600">Nenhum item adicionado ainda.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {carrinho.map((item) => (
                  <li key={item.id} className="border-b pb-2 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selecionados.includes(item.id)}
                      onChange={() => toggleSelecionado(item.id)}
                      aria-label={`Selecionar ${item.nome}`}
                    />
                    <strong>{item.nome}</strong> - {item.valor} (Qtd: {item.quantidade || 1})
                  </li>
                ))}
              </ul>

              {/* Mostrando o total aqui */}
              <div className="mt-6 text-right font-semibold text-lg">
                Total: {totalFormatado}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={excluirSelecionados}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Excluir selecionados
                </button>

                <a
                  href={gerarMensagemWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold"
                  aria-label="Finalizar orçamento via WhatsApp"
                >
                  Finalizar orçamento via WhatsApp
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

