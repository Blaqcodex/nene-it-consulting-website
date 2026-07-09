import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ContactsTable from "../../components/admin/ContactsTable";
import SearchBar from "../../components/admin/SearchBar";
import { getContacts } from "../../services/admin.service";
import ViewContactModal from "../../components/admin/ViewContactModal";
import UpdateStatusModal from "../../components/admin/UpdateStatusModal";
import { updateContactStatus } from "../../services/admin.service";


const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusContact, setStatusContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
  try {
    const response = await getContacts();

    setContacts(response.data);
  } catch (error) {
    console.error(error);
  }
};

const handleStatusUpdate = async (status) => {
  try {
    await updateContactStatus(statusContact._id, status);

    setStatusContact(null);

    fetchContacts();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <DashboardLayout>
      <div className="p-8">

        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
              Mission Control
            </p>

            <h1 className="text-4xl font-bold text-white mt-2">
              Contacts
            </h1>

            <p className="text-gray-400 mt-2">
              Monitor and manage incoming enquiries.
            </p>
          </div>

        </div>

        <SearchBar />

        <div className="mt-6">
          <ContactsTable
  contacts={contacts}
  onView={setSelectedContact}
  onStatus={setStatusContact}
/>
        </div>

      </div>
      
      <ViewContactModal
  contact={selectedContact}
  onClose={() => setSelectedContact(null)}
/>

<UpdateStatusModal
  contact={statusContact}
  onClose={() => setStatusContact(null)}
  onSave={handleStatusUpdate}
/>

    </DashboardLayout>
  );
};

export default Contacts;