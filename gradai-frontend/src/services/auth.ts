// src/services/auth.ts
export const login = async (username: string, password: string): Promise<boolean> => {
    // Mock login request; replace with actual API request if needed
    if (username === 'student' && password === 'password123') {
      localStorage.setItem('token', 'mock-token');
      return true;
    }
    return false;
  };
  
  export const logout = (): void => {
    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = (): boolean => {
    return localStorage.getItem('token') !== null;
  };