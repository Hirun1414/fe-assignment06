"use client";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="p-5">
      <form className="flex flex-col gap-4 w-[300px]">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />

        <Select id="venue" defaultValue="Bloom">
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>

          <MenuItem value="Spark">Spark Space</MenuItem>

          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

        <DateReserve />

        <Button variant="contained" name="Book Venue">
          Book Venue
        </Button>
      </form>
    </main>
  );
}
