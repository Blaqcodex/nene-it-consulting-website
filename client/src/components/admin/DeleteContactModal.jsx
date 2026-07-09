const DeleteContactModal = ({
  contact,
  onClose,
  onDelete,
}) => {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-[#111827] border border-gray-800 rounded-2xl w-full max-w-md shadow-2xl">

        <div className="p-6 border-b border-gray-800">

          <h2 className="text-2xl font-bold text-red-400">
            Delete Contact
          </h2>

          <p className="text-gray-400 mt-2">
            This action cannot be undone.
          </p>

        </div>

        <div className="p-6">

          <p className="text-white">
            Are you sure you want to delete
          </p>

          <p className="text-cyan-400 font-semibold mt-2">
            {contact.name}
          </p>

          <p className="text-gray-400 text-sm">
            {contact.email}
          </p>

        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-800">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition"
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(contact._id)}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteContactModal;