export interface DesignContextType {
  currentDesign: string;
  setCurrentDesign: (design: string) => void;
}

export interface AdminContextType {
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
}

export * from '../data/data';