import { HttpResponse } from "../../../../core/types/response.types";
import { warehouse } from "../../entity/warehouse.entity";
export interface IRegisterBoxRepository {
    register(warehouse: warehouse): Promise<HttpResponse>;
}