// plugins.js
module.exports = ({ env }) => ({
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        editorConfig: {
          selector: "textarea", // change this value according to your HTML
          content_style: `
          .callout {
            border-left: 5px solid red;
            padding-left: 2rem;
            margin-left: 1rem;
          }
          .callout a {
            font-weight: bold;
            font-size: 2rem;
            margin: 0;
          }
          .callout p {
            margin: 0;
          }
          .btn {
            background-color: none;
            border: none;
            border-radius: 0;
          }
          .btn-primary {
            background-color: white;
            border: 1px solid black;
          }
          .btn-secondary {
            background-color: black;
            color: white;
            border: 1px solid black;
          }
          tbody tr:first-of-type {
            background-color: black;
            color: white;
            font-weight: bold;
          }
          tbody tr:nth-of-type(2n) {
            background-color: #f2f2f2;
          }
          td {
            border: none;
          }
          `,
          height: 500,
          extended_valid_elements: "span, img, small",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "advlist autolink lists link image charmap preview anchor \
                      searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                      insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | styles | ndaComponents | bold italic forecolor backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      media table emoticons visualblocks code|\
                      nonbreaking bullist numlist outdent indent | removeformat | help",
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" },
              ],
            },

            {
              title: "Text",
              items: [
                { title: "Paragraph", block: "p" },
                {
                  title: "Paragraph with small letters",
                  block: "small",
                },
              ],
            },
          ],
        },
      },
    },
  },
});
