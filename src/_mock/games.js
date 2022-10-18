import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = ['Rock Paper Scissors', 'Morra', 'Fortune Telling'];

const posts = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
