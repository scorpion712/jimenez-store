import React from "react";  
import SalesTable from "../components/sales/SalesTable";

import GenericSalesView from "./GenericSalesView";

export default function SalesView(props: {
  search: string,
  dateFrom: Date | null,
  dateTo: Date | null
}) { 

  const [open, setOpen] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const [dateFrom, setDateFrom] = React.useState<Date | null>(null);
  const [dateTo, setDateTo] = React.useState<Date | null>(null);
  
  const handleDateFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateFrom(new Date(event.target.value));
  };
  
  const handleDateTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTo(new Date(event.target.value));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLocaleLowerCase());
  }

  return (
    <GenericSalesView 
      open={open} 
      handleDrawerOpen={handleDrawerOpen} 
      handleDrawerClose={handleDrawerClose} 
      handleDateFrom={handleDateFrom}
      handleDateTo={handleDateTo}
      handleSearch={handleSearch}
      >
        <SalesTable search={search} dateFrom={dateFrom} dateTo={dateTo} />
    </GenericSalesView>
  );
}
