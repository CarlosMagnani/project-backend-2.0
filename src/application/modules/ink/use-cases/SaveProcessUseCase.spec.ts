import { InMemoryProcessWagyuRepository } from "src/test/repositories/inmemory.process.repository";
import { MeatWagyu } from "../entities/meat.wagyu.entity";
import { SaveProcessUseCase } from "./SaveProcessUseCase";


describe('Save process Use Case', ()=>{
    it('should be able to create a new Process', async ()=>{
        const process = new MeatWagyu({
            serialNumber:45,
            cutting:'Picanha',
            weight:4234
        });

        const inMemoryProcessWagyuRepository = new InMemoryProcessWagyuRepository();
        const saveProcessUseCase = new SaveProcessUseCase(inMemoryProcessWagyuRepository);
        const userCreated = saveProcessUseCase.execute(process);
    })
})