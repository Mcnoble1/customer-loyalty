import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = ['Algorand', 'Reach', 'Web 3 Terms'];

const posts = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/learn/${index + 1}.png`,
  title: POST_TITLES[index],
}));

export default posts;
