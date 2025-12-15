import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}