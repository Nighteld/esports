import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const roles = ["Carry", "Mid", "Offlane", "Support", "Hard Support"];
import { handlePlayerAction } from "../app/actions/post";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export default function PlayerAdd(props) {
  const { toast } = useToast();
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
  console.log("formData", formData);
  const { open, setOpen, setRefresh } = props;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/api/players",
      responseType: "stream",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        const resData = JSON.parse(res.data);

        toast({
          title: resData.status,
          // description: "Friday, February 10, 2023 at 5:57 PM",
        });
        setFormData((prevData) => ({
          ...prevData,
          name: "",
          address: "",
          phone: "",
          ign: "",
          mmr: "",
          role: "",
          profile: "",
          status: "",
          notes: "",
        }));
        setOpen(false);
        setRefresh((prev) => !prev);
      })
      .catch((err) => {});
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} className="h-full">
      <DialogContent className="w-3/4">
        <DialogHeader>
          <DialogTitle>Register Player</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                // htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kalimati"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9843110001"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IGN
              </label>
              <input
                type="tel"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                name="ign"
                required
                value={formData.ign}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                MMR
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5123"
                required
                name="mmr"
                value={formData.mmr}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                {roles.map((item) => (
                  <option key={item} value={item}>
                    {item}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" items-start mb-5">
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Facebook Link
            </label>
            <input
              type="text"
              name="profile"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://www.facebook.com/NepalPlays"
              required
              value={formData.profile}
              onChange={handleChange}
            />
          </div>
          <div className=" items-start mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              rows="4"
              name="notes"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="I can play carry but i preferred to play support"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
