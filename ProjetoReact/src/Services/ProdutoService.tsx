import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'api/produto';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'    
  }
});

const produtoService = {
    fetchProdutos(): Promise<AxiosResponse<Produto[]>> {
      return apiClient.get<Produto[]>('/lista');
    },
    
    fetchProdutoById(id: number): Promise<AxiosResponse<Produto>> {
      return apiClient.get<Produto>(`/buscaId/${id}`);
    },
  
    createProduto(Produto: Produto): Promise<AxiosResponse<Produto>> {
      console.log(Produto);
      return apiClient.post<Produto>('/cadastro', Produto);
    },
  
    deleteProduto(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default produtoService;
