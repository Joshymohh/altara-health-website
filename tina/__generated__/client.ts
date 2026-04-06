import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/joshuamoffitt/Desktop/altara-project/tina/__generated__/.cache/1775444860947', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  