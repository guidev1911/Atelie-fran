export default function ModalCarrinho({ carrinho = [], onClose }) {
  const gerarMensagemWhatsApp = () => {
    const itensTexto = carrinho
      .map((item, index) => `${index + 1}. ${item.nome} - ${item.valor}`)
      .join("\n");

    const texto = `Olá Fran, gostaria de solicitar um orçamento com os seguintes itens:\n${itensTexto}`;
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
        {/* Botão fechar */}
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
            <ul className="space-y-4">
              {carrinho.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <strong>{item.nome}</strong> - {item.valor}
                </li>
              ))}
            </ul>
          )}

          {carrinho.length > 0 && (
            <div className="mt-6 text-center">
              <a
                href={gerarMensagemWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold inline-block"
                aria-label="Finalizar orçamento via WhatsApp"
              >
                Finalizar orçamento via WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
