
/**
 * Bouton d'ajout de tâche Todo
 * @param onClick Fonction appelée lors du clic sur le bouton
 */
type ButtonCustoProps = {
  onClick: () => void;
  icone?: React.ReactNode;
  text?: string;
};

const ButtonCusto = ({ text, icone, onClick }: ButtonCustoProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {icone}
      {text}
    </button>
  );
};

export default ButtonCusto;