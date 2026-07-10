import { useMemo } from "react";

const useContactSearch = (contacts, searchTerm) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return contacts;

    const query = searchTerm.toLowerCase();

    return contacts.filter((contact) => {
      return (
        contact.name?.toLowerCase().includes(query) ||
        contact.email?.toLowerCase().includes(query) ||
        contact.company?.toLowerCase().includes(query)
      );
    });
  }, [contacts, searchTerm]);
};

export default useContactSearch;