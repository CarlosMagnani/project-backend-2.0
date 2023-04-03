import { EmptyRequireParameter, DateParameter } from "../../../core/types/errors/entity.error";

type BoxProps= {
    id: number;
    batchNumber: string;
    packgingDate: Date;
    department: string;
    meatType: string;
    cuttings: Cuts[];
    status: string;
    destination: string;
    dispatchDate: Date;
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
    private destination: string;
    private dispatchDate: Date;

    constructor(props: BoxProps){
        this.batchNumber = props.batchNumber;
        this.packgingDate = props.packgingDate;
        this.department = props.department;
        this.meatType = props.meatType;
        this.cuttings = props.cuttings;
        this.status = props.status;
        this.destination = props.destination;
        this.dispatchDate = props.dispatchDate;


        if(props.batchNumber.trim() ===''){
            throw new EmptyRequireParameter('batchNumber');
        }

        if(props.packgingDate > props.dispatchDate){   
            throw new DateParameter('packingDate');
        }

        if(!props.cuttings){
            throw new EmptyRequireParameter('Cuttings')
        }
    }

    get getId(): number | null {
        return this.id;
    }
    get getBatch(): string | null {
        return this.batchNumber;
    }
    get getPackDate(): Date | null {
        return this.packgingDate;
    }
    get getDepartment(): string | null {
        return this.department;
    }
    get getMeatType(): string | null {
        return this.meatType;
    }
    get getCuttings(): Cuts[] | null {
        return this.cuttings;
    }
    get getStatus(): string | null {
        return this.status;
    }
    get getDestination(): string | null {
        return this.destination;
    }
    get getDispatchDate(): Date | null {
        return this.dispatchDate;
    }

}

