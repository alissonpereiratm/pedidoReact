// apiService.js
import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:8080/Usuario';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'    
  }
});

const usuarioService = {
    fetchUsuarios(): Promise<AxiosResponse<Usuario[]>> {
      return apiClient.get<Usuario[]>('/lista');
    },
    
    fetchUsuarioById(id: number): Promise<AxiosResponse<Usuario>> {
      return apiClient.get<Usuario>(`/buscaId/${id}`);
    },

    fetchUsuarioLogin(UsuarioLogin: UsuarioLogin): Promise<AxiosResponse<UsuarioLogin>> {
      return apiClient.post<UsuarioLogin>(`/login`, UsuarioLogin);
    },
  
    createUsuario(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
      return apiClient.post<Usuario>('/cadastro', usuario);
    },
  
    updateUsuario(nome: string, usuario: Partial<Usuario>): Promise<AxiosResponse<Usuario>> {
      return apiClient.put<Usuario>(`/updatebyname/${nome}`, usuario);
    },
  
    deleteUsuario(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default usuarioService;