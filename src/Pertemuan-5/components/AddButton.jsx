export default function AddButton({ name, label, onClick }) {
    return (
      <div id="action-button">
        <button
          name={name}
          onClick={onClick} 
          className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          {label} 
        </button>
      </div>
    );
  }