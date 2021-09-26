import { Size } from '../models';
import { get } from './base';

export async function getImage(size: Size): Promise<any> {
    const response = await get(`/${size.width}/${size.height}`);
    return response;
}