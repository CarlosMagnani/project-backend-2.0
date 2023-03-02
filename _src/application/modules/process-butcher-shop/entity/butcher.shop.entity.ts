import { Entity } from "../../../../core/types/Entity";

type ProcessButcherProps = {
    batchNumber: number;
    packgingDate: Date;
    setor: string;
    meatType: string;
    cuttings: string[];
    destination: string;
    dispatchDate: Date;
}

export class ButcherShop extends Entity<ProcessButcherProps>{
    constructor(props: ProcessButcherProps){
        super(props)
    }
}