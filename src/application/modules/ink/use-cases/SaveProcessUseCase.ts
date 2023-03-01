import { MeatWagyu } from "../entities/meat.wagyu.entity";
import { processWagyuRepository } from "../repository/process.wagyu.repository";


export class SaveProcessUseCase{
    constructor(
        private processWagyuRepository: processWagyuRepository
    ){}

    async execute(props: MeatWagyu){
        return await this.processWagyuRepository.save(props);
    }
}