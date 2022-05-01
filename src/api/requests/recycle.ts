import {
  IPostFormSupportParams,
  IPostSuggestionParams,
  IRecycle,
  IGetEstablishment,
  IGetEstablishmentResponse
} from 'api/schemas/recycle';
import { api } from 'api/service';

export async function getRecycleTypes() {
  const res = await api.get<IRecycle>('/discart');

  return res.data;
}

export async function getCompanyById(id: string) {
  const res = await api.get<IGetEstablishmentResponse>(
    `/establishment/id?id=${id}`
  );

  return res.data;
}

export async function getCompanyByName(name: string) {
  const res = await api.get<IGetEstablishment>(
    `/establishment/discart?name=${name}`
  );

  return res.data;
}

export async function postFormSuggestion(params: IPostSuggestionParams) {
  const res = await api.post<IPostSuggestionParams, string>(
    '/sugestion',
    params
  );

  return res;
}

export async function postFormSupport(params: IPostFormSupportParams) {
  const res = await api.post<IPostFormSupportParams, string>('/suport', params);

  return res;
}
