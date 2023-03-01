import { processWagyuRepository } from "@application/modules/ink/repository/process.wagyu.repository";
import { MeatWagyu } from "@application/modules/ink/entities/meat.wagyu.entity";


export class InMemoryProcessWagyuRepository implements processWagyuRepository {
    public processWagyu: MeatWagyu[] = [];

    async save(process: MeatWagyu): Promise<void> {
        this.processWagyu.push(process);
    }
}

