import {describe, expect, it} from 'vitest';
import { DateParameter, EmptyRequireParameter} from '../../../core/types/errors/entity.error';
import { warehouse } from './warehouse.entity';


describe('Box', ()=>{
    const boxProps ={
        id: 1,
        batchNumber: 'ANG342',
        packgingDate: new Date(),
        department: "Angus238",
        meatType: "Angus",
        cuttings:[{
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
        }).toThrow(EmptyRequireParameter);
    });

    it('Should throw DateParemeterError type error if packing date over dispatch date', ()=>{
        expect(()=>{
            new warehouse({
                ...boxProps,
                packgingDate: new Date(),
                dispatchDate: new Date('2023-03-31')
            });
        }).toThrow(DateParameter);
    });
    
    it('Should throw EmptyParameterError type error if cuttings array is null', ()=>{
        expect(()=>{
            new warehouse({
                ...boxProps,
                cuttings:[]
            });
        }).toThrow(EmptyRequireParameter);
    });
});