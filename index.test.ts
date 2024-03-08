import { Nyt } from "./index";

describe("nytimes-typescript-sdk", () => {
    it("initialize client", async () => {
        const nyt = new Nyt({
            apiKey: "API_KEY",
        });
    });
});
