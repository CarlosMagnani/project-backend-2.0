import { Entity } from "src/core/domain/Entitiy";

type WagyuProps = {
    serialNumber: number;
    cutting: string;
    weight: number;
}



export class MeatWagyu extends Entity<WagyuProps>{
    constructor(props: WagyuProps){
        super(props);
    }
}