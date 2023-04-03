import { warehouse } from "../entity/warehouse.entity";
import { IRegisterBoxRepository } from "../contracts/repository/register-warehouse.repository";
import { HttpResponse, Sucess, badRequest } from "../../../core/types/response.types";
import { EmptyRequireParameter } from "../../../core/types/errors";


export class PackingUseCase{
    constructor(private readonly fetchRegisterBox: IRegisterBoxRepository){}

    async execute(warehouse: warehouse): Promise<HttpResponse>{


        if(!warehouse){
            return badRequest(new EmptyRequireParameter('Empty parameters'))
        }



        await this.fetchRegisterBox.register(warehouse)
        return Sucess('Sucessfully')
    }
}