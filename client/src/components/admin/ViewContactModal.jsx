import StatusBadge from "./StatusBadge";

const ViewContactModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-[#111827] w-full max-w-2xl rounded-2xl border border-gray-800 shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-800 px-8 py-6">

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs">
              Mission Control
            </p>

            <h2 className="text-2xl font-bold text-white mt-2">
              Enquiry Details
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 transition flex items-center justify-center text-white"
          >
            ✖
          </button>

        </div>

        {/* Body */}
        <div className="p-8">

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-gray-400 text-sm">Name</p>
              <p className="text-white font-medium mt-1">
                {contact.name}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-medium mt-1">
                {contact.email}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white font-medium mt-1">
                {contact.phone || "-"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Company</p>
              <p className="text-white font-medium mt-1">
                {contact.company || "-"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">
                Status
              </p>

              <StatusBadge status={contact.status} />
            </div>

            <div>
              <p className="text-gray-400 text-sm">Submitted</p>
              <p className="text-white font-medium mt-1">
                {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>

          </div>

          {/* Message */}

          <div className="mt-8">

            <p className="text-gray-400 text-sm mb-3">
              Message
            </p>

            <div className="bg-[#0B1220] border border-gray-700 rounded-xl p-5 text-gray-300 leading-7 min-h-[140px] whitespace-pre-wrap">
              {contact.message}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewContactModal;