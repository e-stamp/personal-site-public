import axios from 'axios';
import { createApiClient } from './utils';
let apiLink = import.meta.env.VITE_API_LINK;

const apiClient = createApiClient();

const api = {

    information: {
        async getInfo() {
            try {
                const response = await apiClient.get('/api/get_info');
                
                if (response.status != 200) {throw new Error('No info recieved')}
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
            
        },
        
        async getProjectInfo() {
            try {
                const response = await apiClient.get('/api/get_projects');
                
                if (response.status != 200) {throw new Error('No project data recieved')}
                return response.data;
            } catch (error) {
                console.error(error);
            }
            
        }
    }
}

export default api;