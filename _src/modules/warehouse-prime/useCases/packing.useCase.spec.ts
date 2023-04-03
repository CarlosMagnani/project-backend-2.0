import { describe, expect, it, test } from "vitest";
import { warehouse } from "../entity/warehouse.entity";
import { PackingUseCase } from "./packing.useCase";
import { EmptyRequireParameter } from "../../../core/types/errors";
import { HttpResponse, Sucess } from "../../../core/types/response.types";

class RegisterRepository {
    async register(): Promise<any>{
        
    }
}

