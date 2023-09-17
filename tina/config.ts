import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "ed0c093e-e05d-4830-9c88-0b76ee91d56d", // Get this from tina.io
  token: "fb6952f9847d91cf53482afbcf39d9c379f3994e", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.postSlug
                ?.toLowerCase()
                .replace(/ /g, '-')}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "postSlug",
            label: "postSlug",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Date Posted",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },

        ],
      },
    ],
  },
});
