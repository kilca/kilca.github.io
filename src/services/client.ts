import sanityClient from '@sanity/client';
const client = sanityClient({
    projectId: 'z54f3n61',
    dataset: 'production',
    apiVersion: '2021-10-21', // use a UTC date string
    useCdn: true,
})

export default client;