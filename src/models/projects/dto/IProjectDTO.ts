interface IProjectDTO {
    user_id?: string,
    nome: string,
    local?: string,
    orcamento?: number,
    data_inicio?: Date,
    data_fim?: Date,
    id_funcionario?: string
}

export {IProjectDTO}