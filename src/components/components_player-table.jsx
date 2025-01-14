"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PlayerAdd from "./playerAdd";
import prisma from "@/lib/client";
import axios from "axios";

const tableHeading = [
  "SN",
  "Name",
  "Address",
  "Phone",
  "IGN",
  "MMR",
  "Role",
  "Facebook",
  "Notes",
];
const roles = ["Carry", "Mid", "Offlane", "Support", "Hard Support"];

export function PlayerTable() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    ign: "",
    mmr: "",
    role: "",
    profile: "",
    status: "",
    notes: "",
  });
  const [players, setPlayers] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [refresh ,setRefresh] = useState(false);
  useEffect(() => {
    const fetchPlayers = async () => {
      axios({
        method: "get",
        url: "/api/players",
        responseType: "stream",
      })
        .then((res) => {
          const resData = JSON.parse(res.data);
          setPlayers(resData.data);
        })
        .catch((err) => {});
    };

    fetchPlayers();
  }, [refresh]);
  const toggleModal = () => setModalOpen(!isModalOpen);

  const sortedPlayers = useMemo(() => {
    return [...players]
      .sort((a, b) => {
        if (!sortColumn) return 0;
        if (a[sortColumn] < b[sortColumn])
          return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn])
          return sortDirection === "asc" ? 1 : -1;
        return 0;
      })
      .filter((player) =>
        Object.values(player).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
  }, [players, sortColumn, sortDirection, searchTerm]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };



  return (
    <div className="container mx-auto py-8 px-4">
      <button
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user-plus mr-1"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="22" x2="16" y1="11" y2="11" />
        </svg>
        Register
      </button>

      <button
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        onClick={() => setRefresh(!refresh)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user-plus mr-1"

        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        Refresh
      </button>

      <div className="overflow-x-auto bg-gray-900 shadow-lg rounded-lg border border-blue-500">
        <table className="min-w-full divide-y divide-blue-500">
          <thead className="bg-blue-900">
            <tr>
              {tableHeading.map((item, index) => (
                <th
                  key={item}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider cursor-pointer hover:bg-blue-800 transition-colors duration-200"
                  onClick={() => handleSort(item.toLowerCase())}
                >
                  <div className="flex items-center">
                    {item}
                    {sortColumn === item.toLowerCase() &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-blue-500">
            {sortedPlayers.map((player, index) => (
              <tr
                key={player.ign}
                className={`${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"
                } hover:bg-blue-900 transition-colors duration-200`}
              >
                 <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-300">
                    {index+1}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-300">
                    {player?.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{player?.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{player?.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-green-400 font-bold">
                    {player?.ign}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">
                  {player?.mmr}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-400">
                  {player?.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400">
                  <a
                    href={`https://${player?.profile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      player.status === "Active"
                        ? "bg-green-900 text-green-300"
                        : player.status === "Inactive"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {player.status}
                  </span>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  <div className="max-w-xs truncate" title={player?.notes}>
                    {player?.notes}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlayerAdd open={open} setOpen={setOpen} setRefresh={setRefresh} />
    </div>
  );
}
