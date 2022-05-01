import { IRecycle } from 'api/schemas/recycle';
import { api } from 'api/service';

export async function getRecycleTypes() {
  const res = await api.get<IRecycle>('/discart');

  return res.data;
}
