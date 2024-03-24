module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator("component", {
    description: "create a new component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "component type",
        choices: [
          { name: "client component", value: "component" },
          { name: "server component", value: "server-component" },
          { name: "page", value: "page" },
          { name: "page component", value: "page-component" },
        ],
      },
      {
        type: "input",
        name: "path",
        message: "Where is the path to create components? (e.g. components)",
      },
      {
        type: "input",
        name: "name",
        message: "What is the component name? (e.g. button)",
      },
    ],
    actions: (data) => {
      const actions = [];
      if (typeof data !== "undefined") {
        if (data.type === "server-component") {
          actions.push({
            type: "add",
            path: "components/{{path}}/{{name}}.tsx",
            templateFile: "generators/server-component.tsx.hbs",
          });
        } else if (data.type === "component") {
          actions.push({
            type: "add",
            path: "components/{{path}}/{{name}}.tsx",
            templateFile: "generators/component.tsx.hbs",
          });
        } else if (data.type === "page") {
          actions.push({
            type: "add",
            path: "app/{{path}}/page.tsx",
            templateFile: "generators/page.tsx.hbs",
          });
        } else if (data.type === "page-component") {
          actions.push({
            type: "add",
            path: "app/{{path}}/_components/{{name}}.tsx",
            templateFile: "generators/component.tsx.hbs",
          });
        }
      }

      return actions;
    },
  });
};
