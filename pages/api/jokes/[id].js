import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  const { id } = request.query; //<- {id: "1"}
  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    return response.status(404).json({ status: "404 Not Found" });
  }

  response.status(200).json(joke);
}
