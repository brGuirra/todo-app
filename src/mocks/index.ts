import { faker } from "@faker-js/faker/locale/pt_BR";
import { createServer, Factory, Model } from "miragejs";

export const makeServer = ({ environment = "development " }) => {
  return createServer({
    environment,

    factories: {
      task: Factory.extend<Partial<API.Task>>({
        get description() {
          return faker.word.words(5);
        },

        get done() {
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
