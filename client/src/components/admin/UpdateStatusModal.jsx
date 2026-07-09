import { useState, useEffect } from "react";

const UpdateStatusModal = ({
  contact,
  onClose,
  onSave,
}) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (contact) {
      setStatus(contact.status);
    }
  }, [contact]);

  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-[#111827] border border-gray-800 rounded-2xl w-full max-w-md">

        <div className="px-6 py-5 border-b border-gray-800">

          <h2 className="text-2xl font-bold text-white">
            Update Status
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Change the enquiry status.
          </p>

        </div>

        <div className="p-6">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-[#0B1220] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none"
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Closed">Closed</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 px-6 py-5 border-t border-gray-800">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(status)}
            className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default UpdateStatusModal;