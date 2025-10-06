import React from 'react';
import { useDesign } from '../contexts/DesignContext';
import Design1 from '../designs/Design1';
import Design2 from '../designs/Design2';
import Design3 from '../designs/Design3';
import Design4 from '../designs/Design4';
import Design5 from '../designs/Design5';

interface DesignRendererProps {
  children: React.ReactNode;
}

export const DesignRenderer: React.FC<DesignRendererProps> = ({ children }) => {
  const { currentDesign } = useDesign();

  const DesignComponent = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  }[currentDesign] || Design1;

  return <DesignComponent>{children}</DesignComponent>;
};