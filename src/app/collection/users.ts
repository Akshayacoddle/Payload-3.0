import demo from "@/components/demo";
import type { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "firstName",
    defaultColumns: ["firstName", "email", "phoneNumber"],
  },

  auth: true,
  fields: [
    {
      name: "firstName",
      type: "text",
      // required: true,
    },
    {
      name: "lastName",
      type: "text",
      // required: true,
    },

    {
      name: "phoneNumber",
      type: "number",
      label: "Phone Number",
    },
    {
      name: "email",
      type: "text",
      label: "email",
    },

    {
      name: "myCustomUIField", // required
      type: "ui", // required
      admin: {
        components: {
          Field: demo,
        },
      },
    },
  ],
};

export default Users;
