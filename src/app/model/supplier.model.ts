export interface SupplierModel {
    id: number;
    name: string;
    email: string;
    comment: string;
    cnpj: string;
}

export interface ResponseSupplier{
    data: SupplierModel[];
}