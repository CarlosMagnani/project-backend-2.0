import { InMemoryProcessWagyuRepository } from "../../../../test/repositories/inmemory.process.repository";
import { MeatWagyu } from "../entities/meat.wagyu.entity";
import { SaveProcessUseCase } from "./SaveProcessUseCase";


 const WagyuProps = {
    serialNumber:47,
    cutting:'Picanha',
    weight:4234
}

describe('Save process Use Case', ()=>{
    it('should serial number is greater than 0', async ()=>{
        const process = new MeatWagyu({
            ...WagyuProps,
            serialNumber: 5
        });


        expect(process.props.serialNumber).toBeGreaterThanOrEqual(1)        
    })
})