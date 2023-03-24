import { Entity } from "../../../core/types/Entity";
import { EmptyParameterError } from "../../../core/types/errors/entity.error";

type BoxProps= {
    id: number;
    batchNumber: string;
    packgingDate: Date;
    department: string;
    meatType: string;
    cutting: Cuts[];
    status: string;
    destination?: string;
    dispatchDate?: Date;
};

type Cuts = {
    name: string
}


export class warehouse {
    private id: number;
    private batchNumber: string;
    private packgingDate: Date;
    private department: string;
    private meatType: string;
    private cuttings: Cuts[];
    private status: string;
    private destination?: string;
    private dispatchDate?: Date;

    constructor(props: BoxProps){
        this.batchNumber = props.batchNumber;
        this.packgingDate = props.packgingDate;
        this.department = props.department;
        this.meatType = props.meatType;
        this.cuttings = props.cutting;
        this.status = props.status;
        this.destination = props.destination;
        this.dispatchDate = props.dispatchDate;


        if(props.batchNumber.trim()===''){
            throw new EmptyParameterError('batchNumber');
        }
    }

    get getId(): number | undefined {
        return this.id;
    }
    get getBatch(): string | undefined {
        return this.batchNumber;
    }
    get getPackDate(): Date | undefined {
        return this.packgingDate;
    }

}

