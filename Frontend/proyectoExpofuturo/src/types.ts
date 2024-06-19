// src/types.ts
export interface Speaker {
    name: string;
    surname: string;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
    city: string;
    department: string;
    company: string;
  }
  
  export interface Space {
    name: string;
    type: string;
    maxCapacity: number;
    minCapacity: number;
    squareMeters: number;
    features: string;
  }
  
  export interface Presentation {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    participants: number;
    speaker: Speaker;
    space: Space;
  }
  