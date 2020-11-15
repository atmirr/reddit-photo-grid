import { API, ERROR_MESSAGES } from '@constants/application';

export const fetchTopPosts = async (keyword, lastId) => {
  const afterParam = lastId === undefined ? '' : `?after=${lastId}`;
  const endPoint = `${API.BASE_URL}/${keyword}/top.json${afterParam}`;
  const response = await fetch(endPoint);
  if (response.status >= 400) {
    // Handle custom error messages
    if (ERROR_MESSAGES?.[response.status]) {
      throw new Error(ERROR_MESSAGES?.[response.status]);
    }
    throw new Error(data.errors);
  }
  const data = await response.json();
  return data;
};
