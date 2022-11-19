import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import Locales from './locales';
 const Provider = ({children, locale})=>(

      <IntlProvider
      locale={locale}
      textComponent = {Fragment}
      messages={messages[Locales]}/>
 )