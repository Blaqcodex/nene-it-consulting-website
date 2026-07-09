const ContactsTable = ({ contacts }) => {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 p-6">
      <h2 className="text-xl font-semibold text-white">
        Contacts Table
      </h2>

      <p className="text-gray-400 mt-2">
        Total Contacts: {contacts.length}
      </p>
    </div>
  );
};

export default ContactsTable;