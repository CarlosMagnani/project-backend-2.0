import { warehouse } from "../../entity/warehouse.entity";

export interface IFecthAllBoxes {
        fetchAllBoxes(warehouse: warehouse): Promise<warehouse[]>;
}