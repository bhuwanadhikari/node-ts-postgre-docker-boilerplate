import expressLoader from './express';
//We have to import at least all the events once so they can be triggered

export default async ({ expressApp }:any) => {
// It returns the agenda instance because it's needed in the subsequent loaders

  await expressLoader({ app: expressApp });
};
