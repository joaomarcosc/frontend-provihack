import {
  IPostFormSupportParams,
  IPostSuggestionParams,
  IRecycle
} from 'api/schemas/recycle';
import { api } from 'api/service';

export async function getRecycleTypes() {
  const res = await api.get<IRecycle>('/discart');

  return res.data;
}

export async function getCompanyByName(name: string) {
  const res = await api.get<IRecycle>(`/establishment/discart?name=${name}`);

  return res.data;
}

export async function postFormSuggestion(params: IPostSuggestionParams) {
  const res = await api.post<IPostSuggestionParams, string>(
    '/suggestion',
    params
  );

  return res;
}

export async function postFormSupport(params: IPostFormSupportParams) {
  const res = await api.post<IPostFormSupportParams, string>(
    '/support',
    params
  );

  return res;
}