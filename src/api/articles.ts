import { AxiosResponse } from 'axios';
import { IArticleInfo } from 'src/types/articles';
import request from 'src/utils/request';

const URL = '/articles/';
const articles = {
  getAll(params: any): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.get(URL, { params });
  },
  getByID(id: string): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.get(`${URL}/${id}`);
  },
  add(params: any): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.post(URL, { params });
  },
  update(data: any): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.patch(URL, data);
  },
  remove(id: string): Promise<AxiosResponse<IArticleInfo[]>> {
    return request.delete(`${URL}/${id}`);
  },
};
export default articles;
