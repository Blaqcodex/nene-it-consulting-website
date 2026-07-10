import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ContactsTable from "../../components/admin/ContactsTable";
import SearchBar from "../../components/admin/SearchBar";
import { getContacts } from "../../services/admin.service";
import ViewContactModal from "../../components/admin/ViewContactModal";
import UpdateStatusModal from "../../components/admin/UpdateStatusModal";
import { updateContactStatus } from "../../services/admin.service";
import DeleteContactModal from "../../components/admin/DeleteContactModal";
import { deleteContact } from "../../services/admin.service";
import useContactSearch from "../../hooks/useContactSearch";
import StatusFilter from "../../components/admin/StatusFilter";
import LoadingState from "../../components/admin/LoadingState";


const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusContact, setStatusContact] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);

const filteredContacts = useContactSearch(
  contacts,
  searchTerm,
  statusFilter
);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
  try {
    setLoading(true);

    const response = await getContacts();

    setContacts(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
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

const handleDelete = async (id) => {
  try {
    await deleteContact(id);

    setDeleteTarget(null);

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

        <div className="flex gap-4 items-center mt-6">
  <SearchBar
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <StatusFilter
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  />
</div>

        <div className="mt-6">
          {
  loading ? (
    <LoadingState />
  ) : (
    <ContactsTable
      contacts={filteredContacts}
      onView={setSelectedContact}
      onStatus={setStatusContact}
      onDelete={setDeleteTarget}
    />
  )
}
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

<DeleteContactModal
  contact={deleteTarget}
  onClose={() => setDeleteTarget(null)}
  onDelete={handleDelete}
/>

    </DashboardLayout>
  );
};

export default Contacts;