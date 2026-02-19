export type PlateParam = string;

export interface VehicleSearchParams {
    plate: PlateParam;
}

export interface VehicleResponse {
    success: boolean;
    data?: {
        id: string;
        placa: string;
        modelo: string;
        marca: string;
        ano: number;
        cor: string;
    };
    error?: string;
}