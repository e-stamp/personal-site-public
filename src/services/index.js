import axios from 'axios';
import { createApiClient } from './utils';
let apiLink = import.meta.env.VITE_API_LINK;

const apiClient = createApiClient();

const api = {

    information: {
        async getInfoVersion() {
            try {
                const response = await apiClient.get('/api/get_info_versions');
                
                if (response.status != 200) {throw new Error('No info versions recieved')}
                return response.data
            } catch (error) {
                console.error(error);
            }
        },

        async getResumeInfo() {
            try {
                const response = await apiClient.get('/api/get_resume_info');
                
                if (response.status != 200) {throw new Error('No resume data recieved')}
                return response.data;
            } catch (error) {
                console.error(error);
            }
            
        }
    }
}

export default api;