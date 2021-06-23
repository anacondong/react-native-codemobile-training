import { createDeepLinkingHandler } from 'react-native-deep-link';
import { handleColorScreenDeepLink } from './handlers'

export default createDeepLinkingHandler([{
    name: 'cmDeepLink:',
    routes: [{
        expression: '/colors/:color',
        callback: handleColorScreenDeepLink
    }]
}]);