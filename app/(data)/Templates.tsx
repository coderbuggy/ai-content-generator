export default [
  {
    name: "Blog Title",
    desc: "An AI Tool that generate blog title depends on your blog",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic title in bullet wise only based on give niche & outline topic and give me result in rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI Tool that generate blog content depends on your topic",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt:
      "Give me detailed blog content idea in bullet wise only based on give niche & outline topic and give me result in rich text editor format",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI Tool that generate blog topic ideas for write niches",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/10266/10266594.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline topic and give me result in rich text editor format",
    slug: "generate-blog-ideas",
    form: [
      {
        label: "Enter your blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Coder AI",
    desc: "An AI Tool that generate codes for your progrramming languages",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    aiPrompt: "Give me the code",
    slug: "coder-ai",
    form: [
      // {
      //   label: "Enter your question",
      //   field: "input",
      //   name: "niche",
      //   required: true,
      // },
      {
        label: "Enter your details",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
