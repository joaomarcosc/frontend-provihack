import { getRecycleTypes } from 'api/requests/recycle';
import { useQuery } from 'react-query';

export function useRecycle() {
  const query = useQuery('recycle', getRecycleTypes);

  return query;
}
