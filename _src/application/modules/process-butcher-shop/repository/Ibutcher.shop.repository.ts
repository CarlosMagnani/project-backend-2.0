import { HttpResponse } from "../../../../core/types/Http.response";
import { ButcherShop } from "../entity/butcher.shop.entity";

export interface IbutcherShopRepository {
    save(process: ButcherShop): Promise<HttpResponse | void>
}