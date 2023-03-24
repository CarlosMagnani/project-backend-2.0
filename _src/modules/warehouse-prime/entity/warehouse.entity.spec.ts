import {describe, expect, it} from 'vitest';
import { EmptyParameterError } from '../../../core/types/errors/entity.error';
import { warehouse } from './warehouse.entity';


describe('Box', ()=>{
    const boxProps ={
        id: 1,
        batchNumber: 342,
        packgingDate: new Date(),
        department: "Angus238",
        meatType: "Angus",
        cutting:[{
            name:'ShortRib'
        },
        {
            name: 'Filet Migno'
        }
    ],
        status: 'Opened',
        destination: 'Rio de Janeiro',
        dispatchDate: new Date() 
    };

    it('Should throw EmptyParameterError type error if batch number is empty', () =>{
        expect(()=>{
            new warehouse({
                ...boxProps,
                batchNumber: '',
            });
        }).toThrow(EmptyParameterError);
    });

    
});