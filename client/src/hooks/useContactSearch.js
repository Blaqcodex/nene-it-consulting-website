import { useMemo } from "react";

const useContactSearch = (
  contacts,
  searchTerm,
  status
) => {
  return useMemo(() => {
    let filtered = contacts;

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      filtered = filtered.filter((contact) => {
        return (
          contact.name?.toLowerCase().includes(query) ||
          contact.email?.toLowerCase().includes(query) ||
          contact.company?.toLowerCase().includes(query)
        );
      });
    }

    if (status) {
      filtered = filtered.filter(
        (contact) => contact.status === status
      );
    }

    return filtered;
  }, [contacts, searchTerm, status]);
};

export default useContactSearch;