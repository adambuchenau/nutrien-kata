import { generateHistogram } from "../../src/services/histogram-service"

describe("histogram service", () => {
    it("the generateHistogram function should count for column", () => {
        const expectedResult = {
            "Rice": 216,
            "Barley": 228,
            "Corn": 240,
            "Upland Cotton": 204,
            "Oats": 228,
            "Sorghum": 228,
            "Soybeans": 228,
            "Wheat": 240,
            "Egg": 132,
            "Per capita meat consumption, retail weight": 120,
            "Beef": 192,
            "Pork": 144,
            "Dairy": 72,
            "Chicken": 108,
            "Turkey": 96,
            "Soybean oil": 132,
            "Soybean meal": 120
          }
        const results = generateHistogram('Commodity')
        expect(results).toEqual(expectedResult)
    })
})
