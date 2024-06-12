import { injectable, inject} from "tsyringe";
import { ICategoria } from "../../reporitories/ICategoria";

@injectable()
class CreateCategoriaUseCase{
    constructor(
        @inject("catFuncRepo")
        private catFuncRepo: ICategoria
    ) { }
    
    async execute(descricao: string) {
        await this.catFuncRepo.create(descricao)
    }
}

export {CreateCategoriaUseCase}