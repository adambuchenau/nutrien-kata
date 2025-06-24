import { parseCsv } from "../../src/services/csv-service"

describe("csv service", () => {
    it("the parseCsv function should return the data from the file", () => {
        const results = parseCsv()
        expect(results.length).toBe(2928)
    })
})
