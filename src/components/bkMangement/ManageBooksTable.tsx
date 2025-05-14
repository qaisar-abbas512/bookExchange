import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

type Person = {
  title: string;
  author: string;
  genre: string;
  condition: string;
  location: string;
  availability: string;
};

const defaultData: Person[] = [
  {
    title: "Sausages",
    author: "Della Langeoh",
    genre: "Sports",
    condition: "80%",
    location: "6578 N Pearl Street, Judytown 77382",
    availability: "Available",
  },
  {
    title: "Bacon",
    author: "Rachel Kovacek",
    genre: "Movies",
    condition: "80%",
    location: "7943 Walker Neck, South Moescter 9381",
    availability: "Reserved",
  },
  {
    title: "Tuna",
    author: "Wilson Wisock",
    genre: "Music",
    condition: "90%",
    location: "41867 Commerce Street, Hutchinson 9256",
    availability: "Available",
  },
];

const columnHelper = createColumnHelper<Person>();

const ManageBooksTable = () => {
  const [data, setData] = React.useState<Person[]>(defaultData);

  const columns = [
    columnHelper.accessor((_, index) => `0${index + 1}`, {
      id: "index",
      header: () => <span className="fw-semibold"></span>,
      cell: (info) => (
        <span>
          {info.row.index + 1 < 100
            ? `0${info.row.index + 1}`
            : info.row.index + 1}
        </span>
      ),
    }),
    columnHelper.accessor("title", {
      id: "title",
      header: () => <span className="fw-semibold">Title</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("author", {
      id: "author",
      header: () => <span className="fw-semibold">Author</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("genre", {
      id: "genre",
      header: () => <span className="fw-semibold">Genre</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("condition", {
      id: "condition",
      header: () => <span className="fw-semibold">Condition</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("location", {
      id: "location",
      header: () => <span className="fw-semibold">Location</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("availability", {
      id: "availability",
      header: () => <span className="fw-semibold">Availability</span>,
      cell: (info) => {
        const rowIndex = info.row.index;
        const currentValue = info.getValue();

        const handleSelect = (newValue: string | null) => {
          if (!newValue) return;
          setData((prevData) =>
            prevData.map((row, idx) =>
              idx === rowIndex ? { ...row, availability: newValue } : row
            )
          );
        };

        return (
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle
              variant="light"
              size="sm"
              className="border-0 bg-dark rounded px-2 py-1 text-start w-100 text-white d-flex align-items-center gap-1"
              style={{ maxWidth: "82px" }}
            >
              {currentValue}
              <img src="./images/down-arrow-Icon.svg" alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="Available"
                active={currentValue === "Available"}
              >
                Available
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Reserved"
                active={currentValue === "Reserved"}
              >
                Reserved
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      },
    }),
    columnHelper.display({
      id: "actions",
      header: () => null,
      cell: () => (
        <div className="d-flex align-items-center">
          <Button variant="link" size="sm" className="p-0 me-2 text-muted">
            <img src="./images/edit-icon.svg" alt="Edit" />
          </Button>
          <Button variant="link" size="sm" className="p-0 text-muted">
            <img src="./images/trash-icon.svg" alt="delete" />
          </Button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container
      fluid
      style={{ maxHeight: "calc(100vh - 350px)", overflowY: "auto" }}
    >
      <Table bordered hover responsive>
        <thead className="bg-light">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-bottom border-0">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-capitalize text-muted small border-0 py-3"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-bottom border-0">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="align-middle text-muted small border-0 py-3"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageBooksTable;
