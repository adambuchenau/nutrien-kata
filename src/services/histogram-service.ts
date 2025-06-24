import { CommodityData } from "../models/commodity-data";
import { parseCsv } from "./csv-service";

export function generateHistogram(column: string) {
    const csvData: CommodityData[] = parseCsv();
    const results: Record<string,number> = {}
    csvData.forEach((row) => {
        var valueForColumn: string = row[column as keyof CommodityData]
        results[valueForColumn] = (results[valueForColumn] || 0) + 1;
    })
    return results
}
