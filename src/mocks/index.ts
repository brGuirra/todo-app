import { faker } from "@faker-js/faker";
import { createServer, Factory, Model } from "miragejs";

export const makeServer = ({ environment = "development " }) => {
  return createServer({
    environment,

    factories: {
      task: Factory.extend<Partial<API.Task>>({
        description() {
          return faker.lorem.words({
            min: 5,
            max: 10,
          });
        },

        done() {
          return faker.datatype.boolean();
        },
      }),
    },

    models: {
      task: Model.extend<Partial<API.Task>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("tasks");

      this.post("tasks", (schema, req) => {
        const { description } = JSON.parse(
          req.requestBody
        ) as Partial<API.Task>;

        return schema.create("task", {
          description,
          done: false,
        });
      });

      this.patch("tasks/:id", (schema, req) => {
        const id = req.params.id;

        const task = schema.find("task", id);

        task?.update("done", !task.done);

        return task;
      });

      this.del("tasks/:id");
    },

    seeds(server) {
      server.createList("task", 5);
    },
  });
};
