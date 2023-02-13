import sanityClient from '@sanity/client';
const client = sanityClient({
    projectId: 'bu9errtr',
    dataset: 'production',
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: true,
})

export default client;