'use client';

import { appWithTranslation } from 'next-i18next';
import React from 'react';
import { ReactNode } from 'react';

interface I18nProviderProps {
  children: ReactNode;
}

function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>;
}

export default appWithTranslation(I18nProvider);
