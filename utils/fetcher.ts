import { error } from "console";

const basePath = process.env.BACKEND_URL;

export function get(path: string): Promise<any> {
  return fetch(basePath + path)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw error("error to fetch on " + basePath + path);
      }
    })
    .catch((e) => console.log(e));
}
