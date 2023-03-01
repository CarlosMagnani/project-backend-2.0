import { MeatWagyu } from "../entities/meat.wagyu.entity";

export interface processWagyuRepository {
    save(process: MeatWagyu): Promise<void>;
}