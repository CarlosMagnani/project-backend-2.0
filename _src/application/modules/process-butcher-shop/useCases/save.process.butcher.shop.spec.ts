import { IbutcherShopRepository } from "../repository/Ibutcher.shop.repository";
import { ButcherShop } from "../entity/butcher.shop.entity";




class IbutcherShopRepositorySpy implements IbutcherShopRepository{
    public butcherShopProps: ButcherShop[] = []

    async save(process: ButcherShop): Promise<void> {
        this.butcherShopProps.push(process)
    }
}

describe('Save Process Butcher shop', ()=>{

})