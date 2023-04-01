import {client} from './sanity.client';
import ImageUrlBuilder  from '@sanity/image-url';

const bulder = ImageUrlBuilder(client);

function urlFor(source:any){
    return bulder.image(source);
}

export default urlFor;