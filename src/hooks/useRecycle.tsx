import {
  getCompanyById,
  getCompanyByName,
  getRecycleTypes,
  postFormSuggestion,
  postFormSupport
} from 'api/requests/recycle';
import { useMutation, useQuery } from 'react-query';

export function useRecycle() {
  const query = useQuery('recycle', getRecycleTypes);

  return query;
}

export function useCompanyById(id: string) {
  const query = useQuery(['companyById', id], () => getCompanyById(id));

  return query;
}

export function useCompanyByName(name: string) {
  const query = useQuery(['company', name], () => getCompanyByName(name));

  return query;
}

export function useFormSuggestion() {
  const mutation = useMutation(postFormSuggestion);

  return mutation;
}

export function useFormSupport() {
  const mutation = useMutation(postFormSupport);

  return mutation;
}
