const ViewContactModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#111827] w-full max-w-2xl rounded-xl border border-gray-800 p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-white">
            Enquiry Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-400 text-sm">Name</p>
            <p className="text-white">{contact.name}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white">{contact.email}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white">{contact.phone || "-"}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Company</p>
            <p className="text-white">{contact.company || "-"}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Status</p>
            <p className="text-white">{contact.status}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Submitted</p>
            <p className="text-white">
              {new Date(contact.createdAt).toLocaleString()}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <p className="text-gray-400 text-sm mb-2">
            Message
          </p>

          <div className="bg-[#1F2937] rounded-lg p-4 text-gray-200">
            {contact.message}
          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewContactModal;