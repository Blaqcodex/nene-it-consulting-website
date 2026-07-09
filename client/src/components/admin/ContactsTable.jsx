import StatusBadge from "./StatusBadge";

const ContactsTable = ({ contacts }) => {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-[#1F2937]">

          <tr>

            <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">
              Name
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">
              Email
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">
              Company
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400">
              Date
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-cyan-400">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {contacts.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="py-10 text-center text-gray-400"
              >
                No enquiries found.
              </td>

            </tr>

          ) : (

            contacts.map((contact) => (

              <tr
                key={contact._id}
                className="border-t border-gray-800 hover:bg-[#1A2235] transition"
              >

                <td className="px-6 py-4 text-white">
                  {contact.name}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {contact.email}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {contact.company || "-"}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={contact.status} />
                </td>

                <td className="px-6 py-4 text-gray-400">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center">

                  Coming Soon

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default ContactsTable;