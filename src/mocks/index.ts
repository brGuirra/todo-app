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
    },

    seeds(server) {
      server.createList("task", 5);
    },
  });
};
