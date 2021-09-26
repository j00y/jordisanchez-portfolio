import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ApiOptions {
    baseUrl: string;
}

let serviceInstance: AxiosInstance;

export function initialize(options: ApiOptions): boolean {
    serviceInstance = axios.create({
        baseURL: options.baseUrl,
    });

    return true;
}

export async function get(url: string, options?: AxiosRequestConfig): Promise<any> {
    try {
        const response = await serviceInstance.get(url, options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function post(url: string, data?: any, options: AxiosRequestConfig = {}): Promise<any> {
    try {
        const response = await serviceInstance.post(url, data, options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function put(url: string, data?: any, options: AxiosRequestConfig = {}): Promise<any> {
    try {
        const response = await serviceInstance.put(url, data, options);
        return response.data;
    } catch (error) {
        throw error;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function patch(url: string, data?: any, options: AxiosRequestConfig = {}): Promise<any> {
    try {
        const response = await serviceInstance.patch(url, data, options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function deleteMethod(url: string, options?: AxiosRequestConfig): Promise<any> {
    try {
        const response = await serviceInstance.delete(url, options);
        return response.data;
    } catch (error) {
        throw error;
    }
}
