import * as fs from 'fs';
import { parse } from "csv-parse/sync";
import { CommodityData } from '../models/commodity-data';

export function parseCsv(): CommodityData[] {
    const fileData = fs.readFileSync('Projection2021.csv','utf8');
    // note on parse below:
    // using 'columns: true' will automatically create objects however it parses the header Attribute as 'Attribute', presumably because it's a keyword somewhere.  
    // because of this, I instead manaully mapped the data and skipped the header row in the parse
    const records: string[][] = parse(fileData, {
        columns: false,
        fromLine: 2,
        skip_empty_lines: true,
      });
    return records.map(row => ({
      Attribute: row[0],
      Commodity: row[1],
      CommodityType: row[2],
      Units: row[3],
      YearType: row[4],
      Year: row[5],
      Value: row[6]
    }));
}
