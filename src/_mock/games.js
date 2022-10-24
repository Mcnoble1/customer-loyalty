import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = ['Rock Paper Scissors', 'Morra', 'Fortune Telling'];

const posts = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/games/${index + 1}.png`,
  title: POST_TITLES[index],
}));

export default posts;
