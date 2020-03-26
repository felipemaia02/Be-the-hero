import api from './services/api'

export default function isAuthenticated(){
    return localStorage.getItem('ongId');
}